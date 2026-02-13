## GitHub Actions Fundamentals --

### What is CI/CD?

#### Continuous Integration (CI)

**Continuous Integration** is a development practice where developers frequently merge their code changes into a central repository. Each merge triggers an automated build and testing process.

**Key Benefits of CI:**
- **Early Bug Detection**: Issues are identified immediately when code is pushed
- **Reduced Integration Problems**: Smaller, frequent changes are easier to integrate
- **Improved Code Quality**: Automated testing ensures code meets quality standards
- **Faster Development**: Developers get quick feedback on their changes
- **Team Collaboration**: Everyone works with the latest code version

### What is GitHub Actions?

**GitHub Actions** is a powerful automation platform built directly into GitHub that enables you to automate your software development workflows.

#### Key Features

1. **Built-in to GitHub**: No external services needed
2. **Event-Driven**: Responds to repository events automatically
3. **Flexible**: Supports any programming language or platform
4. **Marketplace**: Thousands of pre-built actions available
5. **Hosted Runners**: GitHub provides the infrastructure
6. **Self-Hosted Runners**: Use your own infrastructure if needed

### GitHub Actions Architecture

Understanding the architecture is crucial to effectively using GitHub Actions.

#### Component Hierarchy

```
Repository
  └── .github/workflows/
       ├── deploy.yml
            ├── Trigger/Event (when to run)
            └── Jobs (what to do)
                 ├── Test
                 │    ├── runs-on: self-hosted (runner)
                 |    └── Steps
                 |         └── ...
                 │       
                 │
                 └── Deploy
                      ├── runs-on: self-hosted (runner)
                      └── Steps
                           └── ...
```
