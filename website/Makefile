.PHONY: help install start stop refresh build clean clean-install dev

# Default target
help:
	@echo "Available commands:"
	@echo "  make install        - Install dependencies"
	@echo "  make start          - Start development server (installs deps if needed)"
	@echo "  make stop           - Stop development server"
	@echo "  make refresh        - Restart development server"
	@echo "  make dev            - Alias for 'make start'"
	@echo "  make build          - Build for production"
	@echo "  make clean          - Remove build artifacts and cache"
	@echo "  make clean-install  - Remove node_modules and reinstall"

# Install dependencies
install:
	@echo "Installing dependencies..."
	@npm install

# Start development server
start: check-install
	@echo "Starting development server..."
	@if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then \
		echo "Server is already running on port 3000"; \
	else \
		npm run dev & \
		echo $$! > .dev-server.pid; \
		echo "Development server started on http://localhost:3000"; \
		echo "PID saved to .dev-server.pid"; \
	fi

# Stop development server
stop:
	@echo "Stopping development server..."
	@if [ -f .dev-server.pid ]; then \
		kill $$(cat .dev-server.pid) 2>/dev/null || true; \
		rm .dev-server.pid; \
		echo "Development server stopped"; \
	else \
		echo "No PID file found. Checking for processes on port 3000..."; \
		lsof -ti:3000 | xargs kill -9 2>/dev/null || echo "No server running on port 3000"; \
	fi

# Restart development server
refresh: stop
	@sleep 2
	@make start

# Alias for start
dev: start

# Build for production
build: check-install
	@echo "Building for production..."
	@npm run build

# Clean build artifacts
clean:
	@echo "Cleaning build artifacts..."
	@rm -rf .next
	@rm -rf out
	@rm -rf .dev-server.pid
	@echo "Clean complete"

# Clean install (remove node_modules and reinstall)
clean-install:
	@echo "Removing node_modules..."
	@rm -rf node_modules
	@rm -rf package-lock.json
	@make install

# Check if dependencies are installed, install if not
check-install:
	@if [ ! -d "node_modules" ]; then \
		echo "Dependencies not found. Installing..."; \
		make install; \
	fi
