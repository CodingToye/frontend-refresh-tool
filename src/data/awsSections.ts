import type {Section} from "@/components/SectionCard/types";

export const sections: Section[] = [
  {
    title: "AWS Fundamentals",
    items: [
      {
        name: "Regions and Availability Zones",
        summary:
          "AWS Regions are geographic areas, and each Region contains multiple Availability Zones for resilience and fault tolerance.",
        interview: true,
        mockQuestions: [
          {
            id: "regions-azs-1",
            question:
              "What is the difference between an AWS Region and an Availability Zone?",
            answer:
              "A Region is a geographic area containing multiple isolated Availability Zones. An Availability Zone is one or more data centres within a Region designed for fault isolation and high availability.",
          },
          {
            id: "regions-azs-2",
            question:
              "Why would you deploy across multiple Availability Zones?",
            answer:
              "Deploying across multiple Availability Zones improves resilience and availability by reducing the impact of infrastructure failures in a single zone.",
          },
        ],
        code: `# Example architecture idea
# Web tier in AZ-a and AZ-b
# Database deployed Multi-AZ`,
      },
      {
        name: "Shared Responsibility Model",
        summary:
          "AWS secures the cloud infrastructure, while customers are responsible for securing their workloads, data, identities, and configurations.",
        interview: true,
        mockQuestions: [
          {
            id: "shared-responsibility-1",
            question: "What is the AWS shared responsibility model?",
            answer:
              "The shared responsibility model means AWS is responsible for security of the cloud, while the customer is responsible for security in the cloud, such as IAM, application security, operating systems, and data protection depending on the service used.",
          },
        ],
        code: `# AWS manages:
# - physical data centres
# - hardware
# - managed service infrastructure

# Customer manages:
# - IAM
# - data
# - application code
# - network rules`,
      },
      {
        name: "Core Global Infrastructure Concepts",
        summary:
          "Architectural decisions in AWS often depend on Region placement, latency needs, resilience requirements, and service availability.",
        mockQuestions: [
          {
            id: "global-infra-1",
            question:
              "What AWS infrastructure concepts influence architecture decisions most often?",
            answer:
              "The main concepts are Regions, Availability Zones, edge locations, latency, resilience, service availability by Region, and data residency requirements.",
          },
        ],
        code: `const architectureFactors = [
  "latency",
  "resilience",
  "data residency",
  "cost",
  "service availability",
];`,
      },
    ],
  },
  {
    title: "Networking",
    items: [
      {
        name: "VPC Basics",
        summary:
          "A VPC is your logically isolated network in AWS where you define subnets, routing, and network controls.",
        interview: true,
        mockQuestions: [
          {
            id: "vpc-basics-1",
            question: "What is a VPC in AWS?",
            answer:
              "A VPC, or Virtual Private Cloud, is a logically isolated network in AWS where you define IP ranges, subnets, route tables, gateways, and security controls for your workloads.",
          },
        ],
        code: `# Typical VPC layout
# - public subnets for ALB / NAT
# - private subnets for app servers
# - private subnets for databases`,
      },
      {
        name: "Public and Private Subnets",
        summary:
          "Public subnets can route to the internet through an Internet Gateway, while private subnets are used for internal services and protected workloads.",
        mockQuestions: [
          {
            id: "subnets-1",
            question:
              "What is the difference between a public subnet and a private subnet?",
            answer:
              "A public subnet has a route to an Internet Gateway and is typically used for internet-facing resources such as load balancers. A private subnet does not expose resources directly to the internet and is often used for application and database tiers.",
          },
        ],
        code: `# Public subnet:
# route 0.0.0.0/0 -> Internet Gateway

# Private subnet:
# route 0.0.0.0/0 -> NAT Gateway`,
      },
      {
        name: "Security Groups and NACLs",
        summary:
          "Security Groups are stateful instance-level firewalls, while NACLs are stateless subnet-level controls.",
        interview: true,
        mockQuestions: [
          {
            id: "sg-vs-nacl-1",
            question:
              "What is the difference between a Security Group and a NACL?",
            answer:
              "Security Groups are stateful and apply at the resource level, while Network ACLs are stateless and apply at the subnet level. Security Groups are usually the primary control for workload access.",
          },
        ],
        code: `# Example:
# ALB security group allows inbound 443
# App security group allows inbound 3000 from ALB SG only`,
      },
      {
        name: "Route Tables, Internet Gateway, and NAT Gateway",
        summary:
          "Routing determines whether subnets are internet-facing, internal-only, or allowed controlled outbound access.",
        mockQuestions: [
          {
            id: "routing-gateways-1",
            question: "Why would a private subnet need a NAT Gateway?",
            answer:
              "A NAT Gateway allows resources in a private subnet to make outbound internet requests, such as fetching package updates or calling external APIs, without exposing them to inbound internet traffic.",
          },
        ],
        code: `# Public route table
0.0.0.0/0 -> igw-123

# Private route table
0.0.0.0/0 -> nat-456`,
      },
    ],
  },
  {
    title: "Compute",
    items: [
      {
        name: "EC2",
        summary:
          "EC2 provides virtual servers with full control over the operating system, runtime, and deployment model.",
        interview: true,
        mockQuestions: [
          {
            id: "ec2-1",
            question: "When would you choose EC2 for an application?",
            answer:
              "You would choose EC2 when you need more control over the operating system, runtime, networking, or deployment environment than fully managed services provide.",
          },
        ],
        code: `# Example deployment
# EC2 instances in Auto Scaling Group
# Nginx + Node.js app
# behind Application Load Balancer`,
      },
      {
        name: "Auto Scaling Groups",
        summary:
          "Auto Scaling Groups maintain instance health and adjust capacity based on demand or defined policies.",
        mockQuestions: [
          {
            id: "asg-1",
            question: "What problem does an Auto Scaling Group solve?",
            answer:
              "An Auto Scaling Group helps maintain availability and scalability by replacing unhealthy instances and adjusting the number of instances based on demand or capacity policies.",
          },
        ],
        code: `# Scaling example
min: 2
desired: 2
max: 6

# scale out when CPU > 70%`,
      },
      {
        name: "Lambda",
        summary:
          "AWS Lambda runs code without managing servers and is useful for event-driven workloads, APIs, and background processing.",
        interview: true,
        mockQuestions: [
          {
            id: "lambda-1",
            question: "When is Lambda a good architectural choice?",
            answer:
              "Lambda is a good choice for event-driven functions, lightweight APIs, automation, background jobs, and workloads with variable traffic where server management should be minimised.",
          },
          {
            id: "lambda-2",
            question: "What are common trade-offs with Lambda?",
            answer:
              "Common trade-offs include cold starts, execution time limits, memory and runtime constraints, debugging complexity, and the need to design around stateless execution.",
          },
        ],
        code: `export const handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true }),
  };
};`,
      },
      {
        name: "ECS and Containers",
        summary:
          "ECS lets you run containerised applications with managed orchestration, often using Fargate or EC2 capacity.",
        mockQuestions: [
          {
            id: "ecs-1",
            question: "What is ECS and when might you use it?",
            answer:
              "ECS is Amazon's container orchestration service. It is useful when deploying containerised applications with predictable runtime environments and easier scaling across services.",
          },
        ],
        code: `# Example architecture
# ALB -> ECS Service -> Tasks
# task definition includes app container`,
      },
    ],
  },
  {
    title: "Storage and Databases",
    items: [
      {
        name: "S3",
        summary:
          "S3 is object storage commonly used for static assets, uploads, backups, logs, and data lakes.",
        interview: true,
        mockQuestions: [
          {
            id: "s3-1",
            question:
              "What is S3 commonly used for in a full stack architecture?",
            answer:
              "S3 is often used for static frontend assets, user uploads, backups, application logs, and files that do not need a traditional file system.",
          },
        ],
        code: `# Common uses
# - React build output
# - image uploads
# - logs
# - generated reports`,
      },
      {
        name: "RDS",
        summary:
          "RDS provides managed relational databases such as PostgreSQL and MySQL with backups, monitoring, and high availability features.",
        interview: true,
        mockQuestions: [
          {
            id: "rds-1",
            question:
              "Why would you use RDS instead of self-managing a database on EC2?",
            answer:
              "RDS reduces operational overhead by managing backups, patching, monitoring, failover options, and high availability features for supported relational databases.",
          },
        ],
        code: `# Example:
# PostgreSQL on RDS
# Multi-AZ enabled
# read replicas optional`,
      },
      {
        name: "DynamoDB",
        summary:
          "DynamoDB is a managed NoSQL database designed for low-latency, high-scale key-value and document workloads.",
        interview: true,
        mockQuestions: [
          {
            id: "dynamodb-1",
            question:
              "When would DynamoDB be a better fit than a relational database?",
            answer:
              "DynamoDB is a better fit when you need predictable low-latency performance at scale, flexible schema design, or access patterns built around keys and documents rather than complex joins.",
          },
        ],
        code: `const item = {
  pk: "USER#123",
  sk: "PROFILE",
  name: "Nick",
};`,
      },
      {
        name: "ElastiCache",
        summary:
          "ElastiCache provides in-memory caching using Redis or Memcached to reduce latency and offload repeated database work.",
        mockQuestions: [
          {
            id: "elasticache-1",
            question: "Why might you add Redis to an AWS architecture?",
            answer:
              "Redis can reduce latency and database load by caching frequently accessed data, session state, computed results, or short-lived application data.",
          },
        ],
        code: `# Example cache targets
# - session data
# - product listings
# - rate limiting counters`,
      },
    ],
  },
  {
    title: "Load Balancing and Delivery",
    items: [
      {
        name: "Application Load Balancer",
        summary:
          "An ALB distributes HTTP and HTTPS traffic across targets and supports host-based and path-based routing.",
        interview: true,
        mockQuestions: [
          {
            id: "alb-1",
            question: "What is an Application Load Balancer used for?",
            answer:
              "An Application Load Balancer distributes HTTP and HTTPS traffic across multiple targets and can route traffic based on hostnames, paths, and other request properties.",
          },
        ],
        code: `# Example routes
/api/* -> backend target group
/* -> frontend target group`,
      },
      {
        name: "CloudFront",
        summary:
          "CloudFront is a CDN that caches content at edge locations to improve latency and reduce origin load.",
        interview: true,
        mockQuestions: [
          {
            id: "cloudfront-1",
            question:
              "Why would you put CloudFront in front of an application?",
            answer:
              "CloudFront improves performance by caching content closer to users, reducing origin traffic, improving latency, and adding features such as HTTPS, WAF integration, and signed access controls.",
          },
        ],
        code: `# Typical usage
# CloudFront -> S3 for static assets
# CloudFront -> ALB for dynamic app traffic`,
      },
      {
        name: "Route 53",
        summary:
          "Route 53 provides DNS management, routing policies, and health checks for directing traffic reliably.",
        mockQuestions: [
          {
            id: "route53-1",
            question: "What role does Route 53 play in AWS architecture?",
            answer:
              "Route 53 handles DNS and can route traffic using policies such as weighted, latency-based, and failover routing, often with health checks to improve availability.",
          },
        ],
        code: `# Example:
app.example.com -> CloudFront
api.example.com -> ALB`,
      },
    ],
  },
  {
    title: "Security and Identity",
    items: [
      {
        name: "IAM Users, Roles, and Policies",
        summary:
          "IAM controls who or what can access AWS resources and what actions they are allowed to perform.",
        interview: true,
        mockQuestions: [
          {
            id: "iam-1",
            question:
              "What is the difference between an IAM user and an IAM role?",
            answer:
              "An IAM user represents a long-term identity, while an IAM role is an assumable identity intended for temporary access by people, services, or applications.",
          },
          {
            id: "iam-2",
            question:
              "Why are IAM roles preferred for workloads running in AWS?",
            answer:
              "IAM roles provide temporary credentials and avoid hardcoding long-lived access keys into applications or infrastructure.",
          },
        ],
        code: `# Example:
# ECS task role allows access to S3
# Lambda execution role allows access to DynamoDB`,
      },
      {
        name: "Least Privilege",
        summary:
          "Policies should grant only the permissions required for a workload or user to do its job and nothing more.",
        mockQuestions: [
          {
            id: "least-privilege-1",
            question: "What does least privilege mean in AWS?",
            answer:
              "Least privilege means granting only the minimum permissions required for a user, role, or service to perform its specific tasks, reducing the blast radius of mistakes or compromise.",
          },
        ],
        code: `{
  "Effect": "Allow",
  "Action": ["s3:GetObject"],
  "Resource": ["arn:aws:s3:::my-bucket/*"]
}`,
      },
      {
        name: "Secrets Management",
        summary:
          "Sensitive values such as API keys and database passwords should be stored in managed secret stores rather than code or plain environment files.",
        mockQuestions: [
          {
            id: "secrets-management-1",
            question: "How should secrets be managed in AWS?",
            answer:
              "Secrets should be stored in services such as AWS Secrets Manager or Systems Manager Parameter Store rather than being hardcoded in source code or committed to repositories.",
          },
        ],
        code: `# Example secret usage
# app retrieves DB password from Secrets Manager at runtime`,
      },
      {
        name: "WAF and Shield",
        summary:
          "AWS WAF helps filter malicious web traffic, while Shield provides DDoS protection capabilities.",
        mockQuestions: [
          {
            id: "waf-shield-1",
            question: "What is AWS WAF used for?",
            answer:
              "AWS WAF is used to inspect and filter web traffic based on rules, helping protect applications from common threats such as malicious bots, suspicious IPs, and certain attack patterns.",
          },
        ],
        code: `# Example protection layer
Internet -> CloudFront + WAF -> ALB -> app`,
      },
    ],
  },
  {
    title: "Monitoring and Observability",
    items: [
      {
        name: "CloudWatch Metrics and Logs",
        summary:
          "CloudWatch provides core monitoring, metrics, dashboards, alarms, and log collection for AWS resources and applications.",
        interview: true,
        mockQuestions: [
          {
            id: "cloudwatch-1",
            question: "What does CloudWatch help with in an AWS architecture?",
            answer:
              "CloudWatch helps with metrics, logs, dashboards, alarms, and observability across infrastructure and applications running on AWS.",
          },
        ],
        code: `# Common examples
# - CPU alarms
# - error rate alarms
# - Lambda logs
# - custom app metrics`,
      },
      {
        name: "Distributed Tracing",
        summary:
          "Tracing helps follow requests across multiple services and identify latency, bottlenecks, and failures.",
        mockQuestions: [
          {
            id: "tracing-1",
            question:
              "Why is distributed tracing useful in cloud architectures?",
            answer:
              "Distributed tracing helps understand how requests move across services, which is useful for diagnosing latency, failures, and bottlenecks in distributed systems.",
          },
        ],
        code: `# Example flow
# CloudFront -> ALB -> ECS -> RDS
# tracing helps identify slow segment`,
      },
      {
        name: "Alarms and Alerting",
        summary:
          "Operational alarms should be tied to meaningful metrics such as error rates, latency, queue depth, and unhealthy hosts.",
        mockQuestions: [
          {
            id: "alarms-1",
            question: "What kinds of alarms are most useful in production?",
            answer:
              "Useful alarms are tied to service health and user impact, such as high error rates, elevated latency, unhealthy targets, queue backlogs, or failed jobs.",
          },
        ],
        code: `# Examples:
# 5xx error alarm
# unhealthy host count alarm
# queue depth alarm`,
      },
    ],
  },
  {
    title: "Architecture Patterns",
    items: [
      {
        name: "Three-tier Architecture",
        summary:
          "A common full stack setup separates presentation, application, and data layers for scalability and maintainability.",
        interview: true,
        mockQuestions: [
          {
            id: "three-tier-1",
            question: "What is a three-tier architecture on AWS?",
            answer:
              "A three-tier architecture separates the frontend, application logic, and data layer. On AWS this might mean CloudFront or S3 for frontend delivery, ECS or EC2 for the app layer, and RDS or DynamoDB for data.",
          },
        ],
        code: `# Example
# CloudFront/S3 -> ALB/ECS -> RDS`,
      },
      {
        name: "Event-driven Architecture",
        summary:
          "Event-driven systems use services such as SQS, SNS, EventBridge, and Lambda to decouple producers from consumers.",
        interview: true,
        mockQuestions: [
          {
            id: "event-driven-1",
            question: "Why would you use an event-driven architecture?",
            answer:
              "Event-driven architecture improves decoupling, resilience, and scalability by allowing systems to react asynchronously to events rather than relying on tightly coupled direct calls.",
          },
        ],
        code: `# Example
# user signup -> EventBridge event -> Lambda -> email + analytics`,
      },
      {
        name: "Queues with SQS",
        summary:
          "SQS helps buffer work, decouple services, and smooth out spikes in traffic or background processing.",
        mockQuestions: [
          {
            id: "sqs-1",
            question: "What problem does SQS solve?",
            answer:
              "SQS decouples services and absorbs bursts of work, allowing producers and consumers to operate independently and improving reliability in asynchronous workflows.",
          },
        ],
        code: `# Example:
# API writes job to SQS
# worker service processes queue asynchronously`,
      },
      {
        name: "Pub/Sub with SNS",
        summary:
          "SNS lets one event fan out to multiple subscribers such as queues, Lambdas, or HTTP endpoints.",
        mockQuestions: [
          {
            id: "sns-1",
            question: "When would you use SNS instead of SQS?",
            answer:
              "SNS is useful when one message or event needs to be broadcast to multiple subscribers, while SQS is more focused on queue-based work distribution.",
          },
        ],
        code: `# Example:
# order placed -> SNS topic
# subscribers: email service, billing service, analytics service`,
      },
    ],
  },
  {
    title: "Frontend and Full Stack Delivery",
    items: [
      {
        name: "Hosting a SPA on AWS",
        summary:
          "A React or similar frontend can be hosted using S3 and CloudFront with API traffic routed separately to backend services.",
        mockQuestions: [
          {
            id: "spa-hosting-1",
            question: "How would you host a React SPA on AWS?",
            answer:
              "A common approach is to store the built static assets in S3 and serve them through CloudFront, with API requests routed to a backend on ALB, API Gateway, Lambda, ECS, or EC2.",
          },
        ],
        code: `# Example
# CloudFront
# - origin 1: S3 for frontend
# - origin 2: API backend`,
      },
      {
        name: "API Gateway",
        summary:
          "API Gateway provides managed API front doors for Lambda and other backend integrations with throttling, auth, and routing features.",
        interview: true,
        mockQuestions: [
          {
            id: "api-gateway-1",
            question: "When might you choose API Gateway for a backend?",
            answer:
              "API Gateway is a good fit when building managed HTTP APIs, especially alongside Lambda, and when you want built-in routing, throttling, authorisation, and request handling features.",
          },
        ],
        code: `# Example:
# Client -> API Gateway -> Lambda -> DynamoDB`,
      },
      {
        name: "CI/CD on AWS",
        summary:
          "Deployment pipelines can be built with services such as CodePipeline, CodeBuild, and CodeDeploy or integrated external tooling.",
        mockQuestions: [
          {
            id: "cicd-aws-1",
            question: "What does a CI/CD pipeline on AWS typically do?",
            answer:
              "A CI/CD pipeline usually builds code, runs tests, packages artefacts, deploys infrastructure or application updates, and promotes changes through environments with automation and approval controls.",
          },
        ],
        code: `# Typical stages
# source -> build -> test -> deploy`,
      },
    ],
  },
  {
    title: "Cost, Trade-offs, and Practical Design",
    items: [
      {
        name: "Managed Services vs Control",
        summary:
          "Architectural choices often balance operational simplicity against flexibility and fine-grained control.",
        interview: true,
        mockQuestions: [
          {
            id: "managed-vs-control-1",
            question:
              "How do you decide between managed services and self-managed infrastructure?",
            answer:
              "The decision usually depends on the need for control, team expertise, operational overhead, compliance constraints, scaling patterns, and how much undifferentiated heavy lifting should be reduced.",
          },
        ],
        code: `# Example trade-off
# RDS: less operational overhead
# EC2 DB: more control, more management burden`,
      },
      {
        name: "Cost Optimisation Basics",
        summary:
          "Good AWS architecture should consider scaling behaviour, storage classes, idle resources, and service fit to avoid waste.",
        mockQuestions: [
          {
            id: "cost-optimisation-1",
            question: "What are common ways to reduce AWS costs?",
            answer:
              "Common ways include right-sizing resources, using auto scaling, turning off unused resources, choosing suitable storage classes, leveraging managed services wisely, and monitoring spend regularly.",
          },
        ],
        code: `# Common checks
# - idle EC2
# - oversized RDS
# - unattached EBS
# - over-provisioned NAT/ALB usage`,
      },
      {
        name: "Designing for Failure",
        summary:
          "Reliable cloud systems assume components will fail and are designed to degrade gracefully, recover automatically, and avoid single points of failure.",
        interview: true,
        mockQuestions: [
          {
            id: "designing-for-failure-1",
            question: "What does designing for failure mean in AWS?",
            answer:
              "Designing for failure means assuming components can fail and building systems with redundancy, health checks, automation, retries, and fallback mechanisms so the system remains available or degrades gracefully.",
          },
        ],
        code: `# Examples
# multi-AZ deployment
# retries with backoff
# health checks
# queue-based buffering`,
      },
    ],
  },
];
