# ReactionX AI Frontend UI

An AI-powered conversational Coach Console for the Metis/ReactionX reaction training lights system that enables coaches to configure and deploy training drills using natural language.

## 🎯 Project Overview

This project aims to revolutionize sports training by creating an intelligent interface for the Metis Reaction Training Lights system. Instead of requiring coaches to understand complex technical parameters and modes, the AI-powered console allows them to describe their training goals in plain language and automatically generates optimal light configurations.

### Key Features

- **Natural Language Configuration**: Describe drills in plain language, get optimal light setups
- **Drill-First Approach**: Start with training objectives, not technical parameters
- **Adaptive Learning**: System learns from coach preferences and feedback
- **Multiple Input Methods**: Accept drill descriptions, light configurations, or both
- **Real-time BLE Integration**: Direct connection to Metis/ReactionX lights via Bluetooth
- **JSON Schema Validation**: Ensures generated configurations are valid

## 🏗️ Project Structure

```
02_Reactionx_AI_Frontend_UI/
├── 00_Framework_Library/          # AI development frameworks and methodologies
│   ├── ai_development_workflow_framework.md
│   ├── context_engineering_framework.md
│   ├── multi_agent_orchestration_framework.md
│   └── [12 other framework files]
├── docs/                          # Technical documentation
│   ├── ble-profile.md            # Bluetooth communication protocol
│   ├── web-manual-en.pdf         # User manual
│   └── modified_table_image.png  # Reference diagrams
├── schema/                        # Configuration validation
│   ├── config.schema.json        # JSON schema for light configurations
│   ├── samples/                  # Valid/invalid configuration examples
│   ├── validate-samples.mjs      # Schema validation script
│   └── README.md                 # Schema documentation
├── Metis Reaction Training Lights/ # Product documentation
│   ├── Metis - Reaction Training Lights.pdf
│   ├── Comprehensive Guide documents
│   └── App historical chat logs
├── Purpose/                       # UX improvement discussions
│   └── Chat History of UX improvements
├── Data.md                       # Environmental sensor data (CO2, temp, etc.)
└── cursor_designing_the_metis_coach_consol.md  # Design specifications
```

## 🚀 Core Functionality

### AI Coach Console Features

1. **Start Anywhere Approach**
   - Accept drill descriptions only (preferred)
   - Accept light configurations only
   - Accept both drill + light parameters
   - Merge partial information into complete plans

2. **Intelligent Configuration Generation**
   - Ask ≤2 essential clarifying questions
   - Suggest 2-3 distinct lighting strategies
   - Auto-generate valid JSON configurations
   - Ensure schema compliance

3. **Learning & Adaptation**
   - Track coach choices and overrides
   - Learn from feedback patterns
   - Improve future suggestions
   - Reduce setup time through personalization

### Supported Training Modes

Based on the schema validation, the system supports:

- **Standard**: Basic reaction training
- **AllAtOnce**: Multiple lights simultaneously
- **Sequence**: Ordered light patterns
- **TrueFalse**: Decision-based reactions
- **Focus**: Concentration training
- **Battle**: Competitive multiplayer modes

## 🔧 Technical Architecture

### Bluetooth Low Energy (BLE) Integration

The system communicates with Metis lights using a custom BLE profile:

```
Primary Service: 0000fff0-0000-1000-8000-00805f9b34fb
Characteristics:
├── FFF1 (writeCmd): Command payload transmission
├── FFF2 (notifyEvent): Real-time event notifications
├── FFF3 (configSync): Configuration synchronization
├── FFF4 (battery): Battery status monitoring
└── FFF5 (ota/dfu): Over-the-air updates
```

### Command Structure

```
[MODE_ID][NUM_LAMPS][COLOUR_CODES...][DELAY_MIN][DELAY_MAX][TIMEOUT]
```

### Schema Validation

All generated configurations must conform to the JSON schema in `schema/config.schema.json`:

```bash
# Run validation tests
node schema/validate-samples.mjs
```

## 🛠️ Development Setup

### Prerequisites

- Node.js (for schema validation)
- BLE-capable device for testing
- Access to Metis/ReactionX hardware

### Running Schema Validation

```bash
cd schema
node validate-samples.mjs
```

This validates all sample configurations in `schema/samples/` against the defined schema.

### Framework Library

The `00_Framework_Library/` contains comprehensive AI development frameworks including:

- **AI Development Workflow**: Enterprise-grade AI system development
- **Context Engineering**: Structured prompt engineering methodology
- **Multi-Agent Orchestration**: Coordinating multiple AI agents
- **MCP Integration**: Model Context Protocol connectivity
- **Testing & Validation**: AI system quality assurance

## 📱 Integration Options

The project considers two primary implementation paths:

1. **Native App Rewrite**: Rebuild the original ReactionX app with LLM-powered UI
2. **Web-Based Overlay**: Create a web interface that connects to existing BLE backend

## 🎯 Use Cases

### Example Coaching Scenarios

**Scenario 1: Basic Drill Setup**
```
Coach: "I want a reaction drill for 4 players, 30 seconds"
System: Generates Standard mode with 4 colors, optimal timing
```

**Scenario 2: Advanced Training**
```
Coach: "Create a decision-making drill for goalkeepers"
System: Suggests TrueFalse mode with specific color patterns
```

**Scenario 3: Competitive Training**
```
Coach: "Set up a 1v1 battle mode, first to 10 points"
System: Configures Battle mode with 2 player setup
```

## 📊 Data & Analytics

The `Data.md` file contains environmental sensor data that can be used for:
- Training environment optimization
- Performance correlation analysis
- Ideal training condition identification

Data includes:
- CO2 levels
- Temperature
- Humidity
- Light levels
- Occupancy detection

## 🔒 Security & Privacy

Following the AI security compliance framework:
- No personal data storage without consent
- Encrypted BLE communications
- Local processing where possible
- Bias prevention in AI recommendations

## 🤝 Contributing

This project follows enterprise AI development workflows defined in the framework library. Key principles:

1. **Context-First Development**: Establish complete project context before coding
2. **Schema-Driven Design**: All configurations must validate against defined schemas
3. **Human-in-the-Loop**: AI assists but humans make final decisions
4. **Iterative Improvement**: Learn from coach feedback and adapt

## 📄 License

This project contains proprietary Metis/ReactionX integration code and AI development frameworks. Please review licensing terms before use.

## 🔗 Related Resources

- [Metis Reaction Training Lights Official Documentation](./Metis%20Reaction%20Training%20Lights/)
- [BLE Protocol Specification](./docs/ble-profile.md)
- [Configuration Schema](./schema/config.schema.json)
- [AI Development Frameworks](./00_Framework_Library/)

---

**Note**: This repository contains the research, documentation, and framework foundation for the ReactionX AI Frontend UI. The actual implementation will build upon these foundations to create the conversational coach console.