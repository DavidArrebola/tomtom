# Thought Process and Design Decisions for TomTom API Integration Package

## Modularity

The project was structured to enhance modularity by separating concerns and promoting reusability. Key components and functionalities were divided into helper functions and utility modules, simplifying testing and maintenance.

**Key Points:**

- **Utility Functions**: Isolated helper functions for API key management and parameter setting.
- **Separation of Concerns**: Distinct modules for API requests, error handling, and parameter management.

## API Key Management

Centralised API key management to ensure secure and consistent handling, minimising risks and redundancy.

**Key Points:**

- **Centralised Management**: `setApiKey` function retrieves and validates the API key from environment variables.
- **Secure Handling**: Centralised approach minimises exposure of the API key.

## Naming Conventions and Code Consistency

Maintained consistency in naming conventions and function declarations for a clean, professional codebase.

**Key Points:**

- **File Naming**: Kebab casing for file names (e.g., `set-api-key.ts`, `set-params.ts`).
- **Function Declarations**: Standard function declarations over arrow functions.
- **Async/Await**: Used async/await for better readability and error handling.

## Flexibility for Consumers

Designed to allow additional parameters, ensuring the package can be easily customised and extended.

**Key Points:**

- **Additional Parameters**: `setParams` function accepts and merges additional parameters with default settings.
- **Extendability**: Flexible design accommodates future enhancements or API changes.

## Testing and Coverage

Focused on good test coverage to ensure reliability, facilitated by the modular design.

**Key Points:**

- **Unit Tests**: Isolated tests for individual functions and modules.
- **End-to-End Tests**: Verified overall functionality with the TomTom API integration.

## Patching Package Vulnerabilities
During development, several package vulnerabilities were identified and patched to ensure the security and stability of the project. Running `yarn audit` revealed issues with `axios` and `braces`.

**Identified Vulnerabilities:**
- **Axios Cross-Site Request Forgery Vulnerability**
  - **Patched in**: `>=0.28.0`
  - **More Info**: [Axios Advisory](https://www.npmjs.com/advisories/1096525)

- **Uncontrolled Resource Consumption in Braces**
  - **Patched in**: `>=3.0.3`
  - **More Info**: [Braces Advisory](https://www.npmjs.com/advisories/1097496)

**Resolution:**
- Updated dependencies in `package.json` to the patched versions.
- No vulnerabilities are present after the updates.
