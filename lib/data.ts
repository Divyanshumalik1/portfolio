// ───────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file to update the site.
// ───────────────────────────────────────────────────────────────

export const profile = {
  name: "Divyanshu Malik",
  first: "Divyanshu",
  last: "Malik",
  title: "AI Software Engineer II",
  company: "Amgen",
  location: "United States",
  email: "dmalik@ucdavis.edu",
  linkedin: "https://www.linkedin.com/in/divyanshumalik1/",
  github: "https://github.com/Divyanshumalik1",
  resume: "/resume.pdf",
  roles: [
    "multi-agent clinical AI",
    "hybrid RAG with citations",
    "LLM infrastructure",
    "real-time surgical vision",
    "4D Gaussian Splatting",
  ],
  tagline:
    "I build AI that leaves the notebook and lands in production — from multi-agent systems serving thousands of clinicians to computer vision running live in the operating room.",
  bio: [
    "I'm an AI and software engineer with 4+ years of experience building production-grade generative AI, machine learning and distributed systems. Today I work on a multi-agent clinical intelligence platform at Amgen that helps 2,400+ people review trial protocols, discover patient cohorts and analyse evidence.",
    "Before that I built Nexus, a citation-grounded research assistant for the Apache ResilientDB project, and spent three years at an NIH-funded lab at UC Davis turning computer vision and 3D reconstruction into tools surgeons could use during live procedures.",
    "I care about the full path: ingestion, retrieval, orchestration, evaluation, deployment and observability. Models are only as good as the system around them.",
  ],
};

export const stats = [
  { value: 2400, suffix: "+", label: "users on production clinical AI", color: "violet" },
  { value: 70, prefix: "~", suffix: "%", label: "faster time-to-information with Nexus", color: "pink" },
  { value: 17, suffix: "×", label: "faster 4D surgical reconstruction", color: "cyan" },
  { value: 24, suffix: " FPS", label: "real-time intraoperative vision", color: "amber" },
  { value: 6, prefix: "$", suffix: "M", label: "NIH P41 research initiative", color: "emerald" },
  { value: 93, suffix: "%", label: "detection on the hardest patient case", color: "rose" },
] as const;

export type Job = {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  color: "violet" | "pink" | "cyan";
  summary: string;
  highlights: string[];
  stack: string[];
  link?: { label: string; href: string };
};

export const experience: Job[] = [
  {
    company: "Amgen",
    role: "AI Software Engineer II",
    period: "Mar 2026 — Present",
    location: "United States",
    current: true,
    color: "violet",
    summary:
      "Multi-agent clinical intelligence platform supporting 2,400+ internal users across protocol review, patient cohort discovery, site feasibility and evidence analysis.",
    highlights: [
      "Built agent workflows that break clinical questions into retrieval, eligibility analysis, cohort reasoning, site feasibility, evidence review and response generation, with governed tools for Azure AI Search, SQL, PubMed and ClinicalTrials.gov.",
      "Implemented hybrid RAG in Azure AI Search — vector + BM25 + semantic ranking, metadata filtering and reranking — with citation-backed context that grounds every agent answer.",
      "Developed clinical-data ingestion on Azure Data Factory, Databricks, PySpark and Delta Lake, using Document Intelligence to extract eligibility criteria, endpoints, visit schedules and amendments.",
      "Shipped FastAPI services for protocol analysis, cohort matching, site ranking and evidence summarization on AKS behind API Management, with health checks and controlled rollouts.",
      "Built explainable cohort analysis and site-feasibility ranking, and evaluated RAG quality with MLflow, RAGAS, Recall@K, MRR, NDCG, groundedness and clinical-review feedback.",
    ],
    stack: ["Azure OpenAI", "OpenAI Agents SDK", "MCP", "Azure AI Search", "Databricks", "FastAPI", "AKS", "OpenTelemetry"],
  },
  {
    company: "Apache ResilientDB (Incubating)",
    role: "AI Software Engineer",
    period: "Jun 2025 — Mar 2026",
    location: "United States",
    color: "pink",
    summary:
      "Built Nexus, an AI research assistant that helps students and researchers across universities investigate distributed databases, blockchain consensus and systems literature.",
    highlights: [
      "Cut time-to-information by ~70% with citation-grounded RAG, multi-document research and contextual code generation.",
      "Designed an event-driven document pipeline on S3, SQS and Textract with text-embedding-3-large vectors in OpenSearch Serverless — incremental indexing, deduplication and freshness tracking.",
      "Combined BM25 with HNSW vector search, GPT-4o-mini query rewriting and GPT-4.1 generation with enforced citations.",
      "Set up automated evaluation with golden datasets, LLM-as-a-Judge and human review, gating every release on retrieval and faithfulness regressions.",
      "Ran containerized services on EKS with autoscaling, circuit breakers, dead-letter handling, Redis caching and shadow / canary / blue-green deploys; built the Next.js streaming UI.",
    ],
    stack: ["GPT-4.1", "OpenSearch", "Textract", "EKS", "Redis", "FastAPI", "Next.js", "RAGAS"],
    link: { label: "Apache ResilientDB", href: "https://github.com/apache/incubator-resilientdb" },
  },
  {
    company: "NIH Center for Interventional Biophotonic Technologies",
    role: "Software Engineer — 3D Reconstruction & Computer Vision",
    period: "Sep 2022 — Jun 2025",
    location: "UC Davis, California",
    color: "cyan",
    summary:
      "Real-time cancer tumor visualization and surgical assistance for transoral robotic surgery, part of the $6M NIH P41 EB032840 initiative. Three research papers.",
    highlights: [
      "Built a data-centric YOLOv8 segmentation pipeline for FLIm aiming-beam detection across 40 in-vivo surgical videos — 85% median and 78% mean detection.",
      "Raised detection to 93% on the hardest patient case with confidence-based data pruning (κ = 0.2), removing 9% of training samples while improving accuracy.",
      "Optimized the full clinical pipeline to 24 FPS during live procedures; YOLOv8-n hit 29.37 FPS for the best accuracy–latency trade-off.",
      "Created a live incremental 4D Gaussian Splatting framework for monocular endoscopy, cutting reconstruction from 579s to 34–60s per video and beating Endo4DGS (30.15 vs 28.36 PSNR).",
      "Fused FLIm measurements into evolving 3D scenes with TAPNext tracking and DepthAnything priors, and built a React + Socket.IO viewer for surgeon-in-the-loop inspection.",
    ],
    stack: ["PyTorch", "YOLOv8", "ONNX", "Gaussian Splatting", "OpenCV", "React", "Flask", "Socket.IO"],
  },
];

export type Project = {
  title: string;
  kicker: string;
  description: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  viz: "nexus" | "gaussians" | "target" | "mesh";
  color: "violet" | "cyan" | "rose" | "amber";
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Nexus",
    kicker: "Agentic research RAG",
    description:
      "An AI research assistant for the Apache ResilientDB community. Multi-document conversations, PDF previews, cited answers, persistent context and an interactive code composer.",
    metrics: [
      { value: "~70%", label: "faster answers" },
      { value: "BM25+HNSW", label: "hybrid retrieval" },
    ],
    tags: ["GPT-4.1", "OpenSearch", "EKS", "Next.js"],
    viz: "nexus",
    color: "violet",
    href: "https://github.com/apache/incubator-resilientdb",
  },
  {
    title: "Live 4D Gaussian Splatting",
    kicker: "Incremental endoscopic reconstruction",
    description:
      "Rebuilds live surgery in 3D as it happens, adapting to camera motion, tissue deformation and occlusion, and fusing fluorescence measurements as colored Gaussians.",
    metrics: [
      { value: "30.15", label: "PSNR" },
      { value: "34s", label: "vs 579s before" },
    ],
    tags: ["PyTorch", "3DGS", "TAPNext", "DepthAnything"],
    viz: "gaussians",
    color: "cyan",
  },
  {
    title: "FLIm Aiming-Beam Detection",
    kicker: "Data-centric YOLOv8",
    description:
      "Finds the laser aiming beam in robotic-surgery video despite glare, uneven light and label noise, so tissue measurements land in the right place.",
    metrics: [
      { value: "93%", label: "hardest case" },
      { value: "24 FPS", label: "full pipeline" },
    ],
    tags: ["YOLOv8", "ONNX", "OpenCV"],
    viz: "target",
    color: "rose",
  },
  {
    title: "DynamicSurg3D",
    kicker: "Real-time surgical 3D",
    description:
      "Turns monocular endoscope video into 3D with depth estimation and point tracking. A React + Socket.IO viewer gives surgeons live inspection and checkpoint selection.",
    metrics: [
      { value: "Live", label: "3D viewer" },
      { value: "Socket.IO", label: "streaming" },
    ],
    tags: ["YOLOv8", "Depth", "React", "Flask"],
    viz: "mesh",
    color: "amber",
  },
];

export const skills = [
  {
    group: "Generative AI",
    icon: "sparkles",
    items: ["GPT-4.1", "GPT-4o", "Claude", "Gemini", "Llama 3", "Mistral", "OpenAI Agents SDK", "MCP", "LangChain", "LangGraph", "LlamaIndex", "Multi-Agent Orchestration", "Tool Calling", "Prompt Engineering"],
  },
  {
    group: "Retrieval & RAG",
    icon: "telescope",
    items: ["Hybrid Search", "BM25", "Dense Retrieval", "Reranking", "Query Rewriting", "Citation Grounding", "Azure AI Search", "OpenSearch", "Pinecone", "Weaviate", "FAISS", "pgvector", "Knowledge Graphs"],
  },
  {
    group: "ML & Vision",
    icon: "brain",
    items: ["PyTorch", "TensorFlow", "Hugging Face", "scikit-learn", "XGBoost", "OpenCV", "YOLOv8", "ONNX", "Gaussian Splatting", "3D Reconstruction"],
  },
  {
    group: "Cloud & MLOps",
    icon: "cloud",
    items: ["Azure", "AWS", "GCP Vertex AI", "Bedrock", "SageMaker", "Docker", "Kubernetes", "EKS", "AKS", "Terraform", "GitHub Actions", "MLflow"],
  },
  {
    group: "Data Engineering",
    icon: "database",
    items: ["Databricks", "Spark", "PySpark", "Delta Lake", "Kafka", "Airflow", "Snowflake", "Redshift", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    group: "Full Stack",
    icon: "layers",
    items: ["Python", "C++", "TypeScript", "Java", "Kotlin", "SQL", "FastAPI", "Flask", "Node.js", "Next.js", "React", "Tailwind CSS", "WebSockets"],
  },
  {
    group: "Evaluation & Observability",
    icon: "cpu",
    items: ["RAGAS", "LLM-as-a-Judge", "Recall@K", "MRR", "NDCG", "Faithfulness", "Groundedness", "OpenTelemetry", "Prometheus", "Grafana", "CloudWatch"],
  },
] as const;

export const education = [
  {
    school: "University of California, Davis",
    degree: "Master of Science, Computer Science",
    place: "California, USA",
  },
  {
    school: "Delhi Technological University",
    degree: "Bachelor of Technology, Information Technology",
    place: "Delhi, India",
  },
];
