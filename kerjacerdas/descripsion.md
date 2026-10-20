Kerja CerdasÂ is an end-to-end intelligent procurement orchestration platform engineered forÂ PT AKM Group, a multi-brand Food & Beverage enterprise operatingÂ DLKL CoffeeÂ andÂ Blanco Court Beef Noodle (BCBN).
The platform bridges the gap between chaotic, informal chat-based purchasing and structured ERP-grade inventory management. By combining local Small Language Models (SLMs), vector-based semantic retrieval, computer vision OCR, and resilient workflow orchestration, Kerja Cerdas automates procurement from operational demand intake through goods receiving and automated 3-way reconciliation.


Core Architectural Pillars & Capabilities
1. Conversational Ingestion & Semantic Entity Resolution
* Deterministic Gateway: Ingests store orders via a localized Telegram Bot API gateway, mapped deterministically to store branches without AI routing hallucinations.
* Semantic Normalization (RAG + Qdrant): UsesÂ FastEmbed (BGE-M3, 1024-dim)Â andÂ Qdrant Vector DatabaseÂ to resolve colloquial culinary abbreviations and Indonesian slang (e.g., matching typos and informal names to the standardized 650+ Master SKU catalog).
* Local SLM Extraction: Deploys localizedÂ Qwen (GGUF viaÂ llama.cppÂ on Vulkan GPU)Â to extract line items, quantities, and UOMs into structured Purchase Requests (PR).
2. Resilient Workflow Orchestration (Temporal Engine)
* Powered byÂ Temporal Server, decoupling state management and long-running business processes into fault-tolerant workflows:
    * PurchaseRequestWorkflow: Manages drafting, deduplication, item validation, and approval cascades.
    * ReceivingWorkflow: Handles iterative partial shipments, goods receipts, and auto-closing fulfilled POs.
    * ExceptionWorkflow: Flags discrepancies, isolates defective goods, and triggers automatic vendor payment holds.
* Enforces strictÂ D08 Segregation of Duties (SoD): Dual-approval controls, zero tolerance for quantity variance without audit logs, and strict approval role boundaries.
3. Vision-OCR & Automated 3-Way Line Matching
* Unlimited Vision-OCR: Ingests mobile photos of wet-market paper receipts and official vendor delivery orders directly from field staff.
* Automated Reconciliation: Executes 3-way line matching betweenÂ Chat PR $\leftrightarrow$ Purchase Order (PO) $\leftrightarrow$ Goods Receipt (GR).
* Partial Receiving & Print Engine: Supports recurring partial deliveries against an open PO with real-time remaining-balance tracking and automated generation of formal PDF Receiving Slips.
4. Multi-Tier BOM Explosion & Stock Visibility
* Hierarchical Recipe Engine (Finished Dishes $\rightarrow$ Kitchen Preps / Soup Bases $\rightarrow$ Raw Ingredients) with allowance factors (Q-Factor).
* Converts POS sales into exact raw material stock deductions, giving finance and management transparent real-time cost-of-goods-sold (COGS) visibility.
5. Central Control Tower (Web Dashboard)
* Lightweight, high-contrast Web Single Page Application (SPA) providing real-time oversight for directors, purchasing officers, and store managers.
* Features bi-directional notifications, master catalog management, supplier price registers, and one-click PDF purchase order generation.

Technical Stack
* Backend & Workflow Orchestration: Python 3.12, Temporal Server, FastAPI / Native HTTP Microservices.
* Database & Vector Search: PostgreSQL 18 (System of Record, relational schemas with strict constraints), Qdrant (Vector DB for semantic retrieval & embeddings).
* AI & Machine Learning: FastEmbed BGE-M3 (dense semantic embeddings), Qwen 27B SLM (quantized viaÂ llama.cppÂ accelerated by Vulkan API on AMD Radeon 890M / Ryzen AI), Vision-OCR.
* Frontend: Vanilla HTML5/CSS3/JavaScript Control Tower SPA (responsive dual-theme Warm Ivory / Forest Green enterprise design system).