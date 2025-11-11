.PHONY: help install start stop refresh build clean clean-install dev dev-start dev-stop dev-refresh prod-start prod-stop prod-build status

# Default target
help:
	@echo "📖 Available commands:"
	@echo ""
	@echo "🚀 Development:"
	@echo "  make dev-start      - Start development server (npm run dev)"
	@echo "  make dev-stop       - Stop development server"
	@echo "  make dev-refresh    - Restart development server"
	@echo ""
	@echo "🏭 Production:"
	@echo "  make prod-build     - Build for production"
	@echo "  make prod-start     - Start production server (npm start)"
	@echo "  make prod-stop      - Stop production server"
	@echo ""
	@echo "🔧 General:"
	@echo "  make install        - Install dependencies"
	@echo "  make status         - Show running server status"
	@echo "  make clean          - Remove build artifacts and cache"
	@echo "  make clean-install  - Remove node_modules and reinstall"
	@echo ""
	@echo "⚡ Aliases:"
	@echo "  make start          - Alias for 'make dev-start'"
	@echo "  make stop           - Alias for 'make dev-stop'"
	@echo "  make refresh        - Alias for 'make dev-refresh'"
	@echo "  make dev            - Alias for 'make dev-start'"
	@echo "  make build          - Alias for 'make prod-build'"

# Install dependencies
install:
	@echo "📦 Installing dependencies..."
	@npm install
	@echo "✅ Dependencies installed successfully!"

# ============================================
# DEVELOPMENT COMMANDS
# ============================================

# Start development server
dev-start: check-install
	@echo "🚀 Starting development server..."
	@if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then \
		echo "⚠️  Server is already running on port 3000"; \
	else \
		npm run dev & \
		echo $$! > .dev-server.pid; \
		echo "🟢 Development server started on http://localhost:3000"; \
		echo "💾 PID saved to .dev-server.pid"; \
	fi

# Stop development server
dev-stop:
	@echo "🛑 Stopping development server..."
	@if [ -f .dev-server.pid ]; then \
		kill $$(cat .dev-server.pid) 2>/dev/null || true; \
		rm .dev-server.pid; \
		echo "🔴 Development server stopped"; \
	else \
		echo "⚠️  No PID file found. Checking for processes on port 3000..."; \
		lsof -ti:3000 | xargs kill -9 2>/dev/null || echo "🔴 No server running on port 3000"; \
	fi

# Restart development server
dev-refresh: dev-stop
	@sleep 2
	@make dev-start

# ============================================
# PRODUCTION COMMANDS
# ============================================

# Build for production
prod-build: check-install
	@echo "🏗️  Building for production..."
	@npm run build
	@echo "✅ Production build complete!"

# Start production server
prod-start: check-install
	@echo "🏭 Starting production server..."
	@if [ ! -d ".next" ]; then \
		echo "⚠️  Build not found. Running production build first..."; \
		make prod-build; \
	fi
	@if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then \
		echo "⚠️  Server is already running on port 3000"; \
	else \
		npm start & \
		echo $$! > .prod-server.pid; \
		echo "🟢 Production server started on http://localhost:3000"; \
		echo "💾 PID saved to .prod-server.pid"; \
	fi

# Stop production server
prod-stop:
	@echo "🛑 Stopping production server..."
	@if [ -f .prod-server.pid ]; then \
		kill $$(cat .prod-server.pid) 2>/dev/null || true; \
		rm .prod-server.pid; \
		echo "🔴 Production server stopped"; \
	else \
		echo "⚠️  No PID file found. Checking for processes on port 3000..."; \
		lsof -ti:3000 | xargs kill -9 2>/dev/null || echo "🔴 No server running on port 3000"; \
	fi

# ============================================
# ALIASES (for backwards compatibility)
# ============================================

# Aliases for development
start: dev-start
stop: dev-stop
refresh: dev-refresh
dev: dev-start

# Alias for production build
build: prod-build

# ============================================
# UTILITY COMMANDS
# ============================================

# Show server status
status:
	@echo "=========================================="
	@echo "📊 Server Status Report"
	@echo "=========================================="
	@echo ""
	@echo "🚀 Development Server:"
	@if [ -f .dev-server.pid ]; then \
		DEV_PID=$$(cat .dev-server.pid); \
		if ps -p $$DEV_PID > /dev/null 2>&1; then \
			echo "  🟢 Running (PID: $$DEV_PID)"; \
		else \
			echo "  🔴 Not running (stale PID file found)"; \
		fi; \
	else \
		echo "  🔴 Not running (no PID file)"; \
	fi
	@echo ""
	@echo "🏭 Production Server:"
	@if [ -f .prod-server.pid ]; then \
		PROD_PID=$$(cat .prod-server.pid); \
		if ps -p $$PROD_PID > /dev/null 2>&1; then \
			echo "  🟢 Running (PID: $$PROD_PID)"; \
		else \
			echo "  🔴 Not running (stale PID file found)"; \
		fi; \
	else \
		echo "  🔴 Not running (no PID file)"; \
	fi
	@echo ""
	@echo "🔌 Port 3000 Status:"
	@if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1; then \
		echo "  🟢 Port 3000 is in use"; \
		echo "  📋 Processes:"; \
		lsof -Pi :3000 -sTCP:LISTEN | tail -n +2 | awk '{printf "    • PID %s: %s\n", $$2, $$1}'; \
	else \
		echo "  🔴 Port 3000 is free"; \
	fi
	@echo ""
	@echo "📦 Build Status:"
	@if [ -d ".next" ]; then \
		echo "  🟢 Production build exists"; \
	else \
		echo "  🔴 No production build found"; \
	fi
	@echo ""
	@echo "📚 Dependencies:"
	@if [ -d "node_modules" ]; then \
		echo "  🟢 Dependencies installed"; \
	else \
		echo "  🔴 Dependencies not installed"; \
	fi
	@echo "=========================================="

# Clean build artifacts
clean:
	@echo "🧹 Cleaning build artifacts..."
	@rm -rf .next
	@rm -rf out
	@rm -rf .dev-server.pid
	@rm -rf .prod-server.pid
	@echo "✅ Clean complete!"

# Clean install (remove node_modules and reinstall)
clean-install:
	@echo "🗑️  Removing node_modules..."
	@rm -rf node_modules
	@rm -rf package-lock.json
	@make install

# Check if dependencies are installed, install if not
check-install:
	@if [ ! -d "node_modules" ]; then \
		echo "⚠️  Dependencies not found. Installing..."; \
		make install; \
	fi
