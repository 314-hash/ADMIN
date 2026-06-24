// Live System Timer Updates
function updateLiveTime() {
    const timerElem = document.getElementById('live-timer');
    if (timerElem) {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        timerElem.textContent = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
}
setInterval(updateLiveTime, 1000);
updateLiveTime();

// Base Email Dataset (Simulated Outlook Inbox)
let emails = [
    {
        id: 'email-1',
        sender: 'transport@logistics.dhl.com',
        subject: 'Customs Hold: Delayed Shipment of Gasket Assemblies (Shipment #G-8822)',
        body: 'Please be advised that Shipment #G-8822 containing critical gasket assemblies has been flagged by Rotterdam Customs due to an origin certificate mismatch. Estimated hold time is 5-7 business days unless resolved immediately. This delays production at our Munich assembly plant.',
        category: 'Customs Delay',
        priority: 'high',
        urgencyScore: 82,
        rootCause: 'Rotterdam Customs flagged shipment due to mismatched Country of Origin (COO) declaration paperwork from supplier.',
        businessImpact: 'Munich assembly line shutdown risk starting in 4 days. Estimated delayed revenue impact: $150,000.',
        status: 'inbox',
        time: '10:45 AM',
        actions: [
            { text: 'Contact supplier (GasketCorp) for corrected Certificate of Origin.', checked: false },
            { text: 'Escalate to logistics team to coordinate with Rotterdam customs broker.', checked: false },
            { text: 'Notify Munich operations supervisor of the potential assembly delay.', checked: false },
            { text: 'Update ERP/SAP track-and-trace ETA dates.', checked: false }
        ],
        tasks: [
            { title: 'Request Corrected Origin Certificate', owner: 'Procurement', priority: 'High', dueDate: '2026-06-25' },
            { title: 'Liaise Rotterdam Customs Broker', owner: 'Logistics', priority: 'High', dueDate: '2026-06-26' }
        ],
        attachments: [
            { name: 'COO_GasketAssemblies_G8822.pdf', size: '142 KB', content: 'Country of Origin Declaration: Gasket Assemblies #G-8822. Origin: GasketCorp Shanghai, China. Certifying authority: Customs Bureau of Shanghai.' }
        ],
        draftReply: `Dear DHL Logistics Team,\n\nWe have received your alert regarding the customs hold on Shipment #G-8822.\n\nOur procurement team is currently coordinating with the supplier (GasketCorp) to secure the corrected Certificate of Origin. We will feed this into your clearance desk as soon as it is generated.\n\nMeanwhile, our Rotterdam broker, PortClearance BV, will contact your desk to submit the rectified records. Please maintain active updates on status changes.\n\nRegards,\nSignalOps Operations Command`
    },
    {
        id: 'email-2',
        sender: 'sales-service@giga-electronics.tw',
        subject: 'Inventory Alert: Microcontroller IC Shortage (Part #MCU-90X)',
        body: 'We regret to inform you that our fabrication plant in Hsinchu is experiencing silicon yield degradation. Consequently, your order for 25,000 Microcontroller ICs (Part #MCU-90X) originally scheduled to ship next week is delayed. We can split ship 5,000 units by next Friday, but the remaining 20,000 will be delayed by 4 weeks.',
        category: 'Inventory Shortage',
        priority: 'critical',
        urgencyScore: 95,
        rootCause: 'Silicon wafer yield issues at Hsinchu fabrication facility causing sudden production deficit.',
        businessImpact: 'Halts manufacturing of main control board assemblies. High risk of breach of contract penalties with aerospace prime customer.',
        status: 'action_pending',
        time: '08:12 AM',
        actions: [
            { text: 'Approve split shipment of 5,000 units to maintain partial manufacturing.', checked: true },
            { text: 'Search alternative global distributors (Mouser, DigiKey) for immediate MCU-90X stock.', checked: false },
            { text: 'Consult engineering team for drop-in equivalent MCU approval.', checked: false },
            { text: 'Notify senior management of potential aerospace customer SLA penalty risk.', checked: false }
        ],
        tasks: [
            { title: 'Approve Split Shipment MCU-90X', owner: 'Procurement', priority: 'Critical', dueDate: '2026-06-25' },
            { title: 'Search Alternative Sourcing Brokers', owner: 'Procurement', priority: 'High', dueDate: '2026-06-26' },
            { title: 'Evaluate Drop-in MCU Replacements', owner: 'Engineering', priority: 'Medium', dueDate: '2026-06-28' }
        ],
        attachments: [
            { name: 'Yield_Analysis_Hsinchu_MCU.xlsx', size: '1.4 MB', content: 'Hsinchu Silicon Fab Yield Report: Yield loss of 28% on 12nm MCU wafer run #MCU-90X. Projecting 4 week recovery run.' }
        ],
        draftReply: `Dear Giga-Electronics Sales Team,\n\nThis delay creates an immediate production stoppage risk for our assembly lines. \n\nPlease process the split shipment of 5,000 units immediately for air-freight dispatch. Send the tracking details to our logistics center.\n\nWe require formal verification of the recovery schedule for the remaining 20,000 units. Our engineering team is currently assessing secondary component options.\n\nRegards,\nSignalOps Operations Command`
    },
    {
        id: 'email-3',
        sender: 'harbor-master@portofla.org',
        subject: 'Logistics Alert: Crane failure at Terminal 400 - Port of LA',
        body: 'Please be advised that a crane structural failure at Port of LA Terminal 400 has suspended loading/unloading operations. Vessels scheduled to berth over the next 72 hours will experience delays of 48-72 hours. Containers currently on terminal will face pick-up delays due to terminal congestion.',
        category: 'Transportation Disruption',
        priority: 'medium',
        urgencyScore: 58,
        rootCause: 'Mechanical crane structural failure halts dockside cargo container operations at LA Terminal 400.',
        businessImpact: 'Short-term transit delays for trans-Pacific inbound parts. Minor inventory safety stock buffer adjustment required.',
        status: 'in_review',
        time: 'Yesterday',
        actions: [
            { text: 'Cross-reference inbound manifests for containers currently at Terminal 400.', checked: true },
            { text: 'Divert scheduled local trucking carrier pickup gates to functional lanes.', checked: false },
            { text: 'Verify container tracking status and container release statuses with Ocean Carriers.', checked: false }
        ],
        tasks: [
            { title: 'Identify Affected Containers at Terminal 400', owner: 'Logistics', priority: 'Medium', dueDate: '2026-06-26' }
        ],
        attachments: [
            { name: 'Terminal_400_Crane_Advisory.pdf', size: '210 KB', content: 'Terminal 400 mechanical failure status note. Harbor operations closed for gates 401-408.' }
        ],
        draftReply: `Dear Port Operations Team,\n\nWe acknowledge the advisory regarding the crane structural disruption at Terminal 400.\n\nWe are verifying affected container IDs with our ocean carrier partners. Please communicate when gates reopen for dry container extraction.\n\nRegards,\nSignalOps Operations Command`
    },
    {
        id: 'email-4',
        sender: 'audit-compliance@supplychain-regulatory.eu',
        subject: 'Compliance Alert: REACH Declaration Missing for Plastic Components',
        body: 'We have audited your supply registry and noted that the REACH compliance declarations for high-density plastic housings supplied by Polymers Inc. have expired. Failure to upload valid certificates by June 30 will result in a suspension of sales of product lines using these housings in the EU region.',
        category: 'Compliance Risk',
        priority: 'critical',
        urgencyScore: 90,
        rootCause: 'Expired compliance declarations for EU chemical registration rules (REACH) for plastic components.',
        businessImpact: 'Potential block on importing and selling final consumer products in the EU market. Revenue risk: $600,000/month.',
        status: 'inbox',
        time: '2 days ago',
        actions: [
            { text: 'Contact Polymers Inc. regulatory officer to expedite updated REACH declarations.', checked: false },
            { text: 'Conduct internal review of polymer chemistry declarations.', checked: false },
            { text: 'Prepare compliance risk report for European Operations management.', checked: false }
        ],
        tasks: [
            { title: 'Obtain REACH Declarations from Polymers Inc', owner: 'Compliance', priority: 'Critical', dueDate: '2026-06-28' }
        ],
        attachments: [
            { name: 'REACH_PolymersInc_Declaration.pdf', size: '510 KB', content: 'Compliance files for High Density Polyethylene casings (HDPE-209). REACH SVHC list check: Passed.' }
        ],
        draftReply: `Dear EU Compliance Audit Team,\n\nThank you for alerting us to the expired REACH declarations for high-density plastic parts supplied by Polymers Inc.\n\nWe are actively working with the supplier's chemical safety officers to obtain the updated compliance files. We intend to upload these by June 28, ahead of the compliance deadline.\n\nRegards,\nSignalOps Operations Command`
    }
];

// Base Knowledge Base Dataset
let kbArticles = [
    {
        id: 'kb-1',
        title: 'Rotterdam Origin Certificate Rectification Protocol',
        problem: 'NL customs holds due to COO (Country of Origin) mismatches.',
        background: 'Rotterdam port customs authorities hold shipments when paperwork is missing or mismatching supplier name.',
        cause: 'Supplier naming inconsistencies in export certificates.',
        resolution: 'Standardize supplier export profiles. Mandate pre-checks by clearance brokers prior to departure.',
        prevention: 'Automate document validation via supplier portal before shipments leave origin ports.',
        suppliers: 'GasketCorp, Rotterdam Logistics',
        departments: 'Procurement, Customs',
        tags: ['customs', 'rotterdam', 'paperwork']
    },
    {
        id: 'kb-2',
        title: 'Critical Microchip Sourcing Contingency Plan',
        problem: 'Semiconductor yield drops causing component stockouts.',
        background: 'Global fab outages impact MCU and logic board manufacturing lines.',
        cause: 'Single sourcing of high-precision electronic processors.',
        resolution: 'Introduce broker bidding portals. Validate secondary component equivalents in original engineering schematics.',
        prevention: 'Adopt multi-source procurement strategies for active chips.',
        suppliers: 'Giga-Electronics, SourcingBrokers',
        departments: 'Procurement, Engineering',
        tags: ['inventory', 'chip_shortage', 'dual_sourcing']
    }
];

let selectedEmailId = null;

// Page Initializer
window.addEventListener('DOMContentLoaded', () => {
    // Check if redirect callback from Microsoft
    checkM365Callback().then(() => {
        renderEmailList();
        renderKbList();
        updateDashboardMetrics();
        initializeM365UI();
    });
});

// Render Email Cards in Left Pane
function renderEmailList() {
    const listContainer = document.getElementById('email-list-container');
    if (!listContainer) return;
    
    listContainer.innerHTML = '';
    emails.forEach(email => {
        const card = document.createElement('div');
        card.className = `glass-panel email-card ${email.id === selectedEmailId ? 'active' : ''}`;
        card.onclick = () => selectEmail(email.id);
        
        let priorityBadgeClass = 'badge-medium';
        if (email.priority === 'critical') priorityBadgeClass = 'badge-critical';
        else if (email.priority === 'high') priorityBadgeClass = 'badge-high';
        else if (email.priority === 'low') priorityBadgeClass = 'badge-low';
        
        let statusBadgeClass = 'status-inbox';
        if (email.status === 'in_review') statusBadgeClass = 'status-in-review';
        else if (email.status === 'action_pending') statusBadgeClass = 'status-action-pending';
        else if (email.status === 'resolved') statusBadgeClass = 'status-resolved';
        
        card.innerHTML = `
            <div class="email-card-header">
                <span class="email-sender">${email.sender}</span>
                <span class="email-time">${email.time}</span>
            </div>
            <div class="email-subject">${email.subject}</div>
            <div class="email-meta">
                <span class="badge ${priorityBadgeClass}">${email.priority}</span>
                <span class="status-pill ${statusBadgeClass}">${email.status.replace('_', ' ')}</span>
            </div>
        `;
        listContainer.appendChild(card);
    });
    
    document.getElementById('inbox-count').textContent = emails.filter(e => e.status !== 'resolved').length;
}

// Select Email and run AI Analysis Animation Pipeline
function selectEmail(emailId) {
    selectedEmailId = emailId;
    renderEmailList();
    
    // Hide welcome/KB articles and show empty state loader first
    document.getElementById('empty-workspace-state').style.display = 'flex';
    document.getElementById('workspace-details-card').style.display = 'none';
    document.getElementById('workspace-analysis-card').style.display = 'none';
    document.getElementById('workspace-actions-card').style.display = 'none';
    document.getElementById('workspace-reply-card').style.display = 'none';
    document.getElementById('kb-detail-viewer').style.display = 'none';
    
    // Clear & setup AI visualizer
    resetPipelineVisualizer();
    
    const email = emails.find(e => e.id === emailId);
    if (!email) return;
    
    // Update welcome state to reflect parsing
    const emptyStateText = document.querySelector('#empty-workspace-state p');
    const emptyStateTitle = document.querySelector('#empty-workspace-state h2');
    const emptyStateIcon = document.querySelector('#empty-workspace-state .empty-icon');
    
    emptyStateIcon.textContent = '⚙️';
    emptyStateIcon.style.animation = 'spin 2s linear infinite';
    emptyStateTitle.textContent = 'AI Agent Analyzing Email Pipeline...';
    emptyStateText.textContent = `Connecting Microsoft Graph Webhook... Reading email content from ${email.sender}...`;
    
    // Run Simulated Webhook and Pipeline steps
    runPipelineAnimation(() => {
        // Complete Callback: Display details
        emptyStateIcon.style.animation = 'float 3s ease-in-out infinite';
        document.getElementById('empty-workspace-state').style.display = 'none';
        
        // Detail block
        document.getElementById('workspace-details-card').style.display = 'block';
        document.getElementById('disp-subject').textContent = email.subject;
        document.getElementById('disp-sender').textContent = `From: ${email.sender}`;
        
        const priorityBadge = document.getElementById('disp-priority');
        priorityBadge.textContent = email.priority;
        priorityBadge.className = `badge badge-${email.priority}`;
        
        document.getElementById('disp-category').textContent = email.category;
        document.getElementById('disp-status-select').value = email.status;
        
        // Urgency gauge circle animation
        animateUrgencyGauge(email.urgencyScore);
        
        // Root cause
        document.getElementById('workspace-analysis-card').style.display = 'block';
        document.getElementById('disp-business-impact').textContent = email.businessImpact;
        document.getElementById('disp-root-cause').textContent = email.rootCause;
        
        // Suggested Actions
        document.getElementById('workspace-actions-card').style.display = 'block';
        const actionsContainer = document.getElementById('action-items-container');
        actionsContainer.innerHTML = '';
        email.actions.forEach((act, idx) => {
            const actDiv = document.createElement('div');
            actDiv.className = 'action-item';
            actDiv.onclick = (e) => {
                // Ensure clicking checkbox acts correctly
                if (e.target.tagName !== 'INPUT') {
                    const cb = actDiv.querySelector('input');
                    cb.checked = !cb.checked;
                    email.actions[idx].checked = cb.checked;
                    updateActionsProgress();
                }
            };
            actDiv.innerHTML = `
                <input type="checkbox" class="action-checkbox" ${act.checked ? 'checked' : ''} onchange="emails.find(e => e.id === '${emailId}').actions[${idx}].checked = this.checked; updateActionsProgress();">
                <span class="action-text">${act.text}</span>
            `;
            actionsContainer.appendChild(actDiv);
        });
        
        // Reply Composer
        document.getElementById('workspace-reply-card').style.display = 'block';
        document.getElementById('disp-reply-to').textContent = `To: ${email.sender}`;
        document.getElementById('reply-body-field').value = email.draftReply;
        
        // Render Attachments & Document Gateway
        const attachmentsCard = document.getElementById('workspace-attachments-card');
        const attachmentsContainer = document.getElementById('attachments-container');
        if (attachmentsCard && attachmentsContainer) {
            attachmentsContainer.innerHTML = '';
            if (email.attachments && email.attachments.length > 0) {
                attachmentsCard.style.display = 'block';
                email.attachments.forEach((att, attIdx) => {
                    const attDiv = document.createElement('div');
                    attDiv.className = 'sidebar-task-item';
                    attDiv.style.background = 'rgba(255, 255, 255, 0.015)';
                    attDiv.style.border = '1px solid var(--border-color)';
                    attDiv.style.borderRadius = '8px';
                    attDiv.style.padding = '0.75rem';
                    attDiv.style.display = 'flex';
                    attDiv.style.justifyContent = 'space-between';
                    attDiv.style.alignItems = 'center';
                    attDiv.style.marginTop = '0.5rem';
                    
                    attDiv.innerHTML = `
                        <div style="display:flex; align-items:center; gap:0.5rem;">
                            <span style="font-size: 1.5rem;">📄</span>
                            <div>
                                <div style="font-weight:600; font-size:0.8rem; color:var(--text-primary);">${att.name}</div>
                                <div style="font-size:0.7rem; color:var(--text-muted);">${att.size}</div>
                            </div>
                        </div>
                        <button class="btn btn-secondary" style="padding:0.35rem 0.6rem; font-size:0.7rem; border-color:var(--neon-cyan); color:var(--neon-cyan); box-shadow:0 0 5px rgba(0, 242, 254, 0.1);" onclick="saveToOneDrive('${email.id}', ${attIdx})">
                            Save to OneDrive
                        </button>
                    `;
                    attachmentsContainer.appendChild(attDiv);
                });
            } else {
                attachmentsCard.style.display = 'none';
            }
        }
        
        // Render extracted tasks
        renderSidebarTasks(email);
    });
}

// Reset Pipeline GUI
function resetPipelineVisualizer() {
    const steps = ['ingest', 'parse', 'scoring', 'draft', 'complete'];
    steps.forEach(st => {
        const elem = document.getElementById(`step-${st}`);
        elem.classList.remove('active', 'completed');
    });
    document.getElementById('pipeline-fill-line').style.width = '0%';
}

// Run Pipeline Step Pulsing animations
function runPipelineAnimation(callback) {
    const fillLine = document.getElementById('pipeline-fill-line');
    const stepIngest = document.getElementById('step-ingest');
    const stepParse = document.getElementById('step-parse');
    const stepScoring = document.getElementById('step-scoring');
    const stepDraft = document.getElementById('step-draft');
    const stepComplete = document.getElementById('step-complete');
    
    // Ingest starts immediately
    stepIngest.classList.add('active');
    
    setTimeout(() => {
        stepIngest.classList.remove('active');
        stepIngest.classList.add('completed');
        stepParse.classList.add('active');
        fillLine.style.width = '25%';
    }, 400);
    
    setTimeout(() => {
        stepParse.classList.remove('active');
        stepParse.classList.add('completed');
        stepScoring.classList.add('active');
        fillLine.style.width = '50%';
    }, 800);
    
    setTimeout(() => {
        stepScoring.classList.remove('active');
        stepScoring.classList.add('completed');
        stepDraft.classList.add('active');
        fillLine.style.width = '75%';
    }, 1200);
    
    setTimeout(() => {
        stepDraft.classList.remove('active');
        stepDraft.classList.add('completed');
        stepComplete.classList.add('active');
        fillLine.style.width = '100%';
    }, 1600);
    
    setTimeout(() => {
        stepComplete.classList.remove('active');
        stepComplete.classList.add('completed');
        callback();
    }, 2000);
}

// Circular SVG gauge animation
function animateUrgencyGauge(score) {
    const gauge = document.getElementById('urgency-gauge');
    const scoreVal = document.getElementById('disp-urgency');
    
    // Circle circumference is 2 * PI * r = 2 * 3.14159 * 40 = 251.2
    const maxOffset = 251.2;
    const targetOffset = maxOffset - (score / 100) * maxOffset;
    
    gauge.style.strokeDashoffset = maxOffset;
    
    // Choose color based on score
    if (score >= 90) {
        gauge.style.stroke = 'var(--neon-red)';
    } else if (score >= 75) {
        gauge.style.stroke = 'var(--neon-orange)';
    } else if (score >= 50) {
        gauge.style.stroke = 'var(--neon-yellow)';
    } else {
        gauge.style.stroke = 'var(--neon-green)';
    }
    
    let currentScore = 0;
    const interval = setInterval(() => {
        if (currentScore >= score) {
            clearInterval(interval);
        } else {
            currentScore += 2;
            if (currentScore > score) currentScore = score;
            scoreVal.textContent = currentScore;
        }
    }, 15);
    
    setTimeout(() => {
        gauge.style.strokeDashoffset = targetOffset;
    }, 50);
}

// Render extracted tasks in sidebar
function renderSidebarTasks(email) {
    const container = document.getElementById('tasks-list-container');
    const headerCount = document.getElementById('tasks-count');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (!email.tasks || email.tasks.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon" style="font-size: 2rem;">📋</span>
                <p>No operational tasks active</p>
            </div>
        `;
        headerCount.textContent = '0 Completed';
        return;
    }
    
    let checkedCount = email.actions.filter(a => a.checked).length;
    let totalCount = email.actions.length;
    headerCount.className = checkedCount === totalCount ? 'badge badge-low' : 'badge badge-medium';
    headerCount.textContent = `${checkedCount}/${totalCount} Subtasks Checked`;
    
    email.tasks.forEach(task => {
        const item = document.createElement('div');
        item.className = 'sidebar-task-item';
        
        let priorityColor = 'var(--neon-yellow)';
        if (task.priority.toLowerCase() === 'critical') priorityColor = 'var(--neon-red)';
        else if (task.priority.toLowerCase() === 'high') priorityColor = 'var(--neon-orange)';
        else if (task.priority.toLowerCase() === 'low') priorityColor = 'var(--neon-green)';
        
        item.innerHTML = `
            <div>
                <div class="sidebar-task-text">${task.title}</div>
                <div class="sidebar-task-meta">Owner: ${task.owner} | Due: ${task.dueDate}</div>
            </div>
            <div style="font-size: 0.7rem; color: ${priorityColor}; font-weight: bold; text-transform: uppercase;">
                ${task.priority}
            </div>
        `;
        container.appendChild(item);
    });
}

// Update Action Progress
function updateActionsProgress() {
    const email = emails.find(e => e.id === selectedEmailId);
    if (!email) return;
    
    renderSidebarTasks(email);
    
    // If all checked, prompt status change recommendation
    const allChecked = email.actions.every(a => a.checked);
    if (allChecked && email.status !== 'resolved') {
        showToast('All actions checklist items complete! Recommended: Mark status as Resolved.');
    }
}

// Handle email Status dropdown changes
function handleStatusChange(val) {
    const email = emails.find(e => e.id === selectedEmailId);
    if (!email) return;
    
    const prevStatus = email.status;
    email.status = val;
    
    renderEmailList();
    updateDashboardMetrics();
    
    showToast(`Signal status updated: ${prevStatus.replace('_', ' ')} → ${val.replace('_', ' ')}`);
    
    // Automatically trigger Knowledge article generation if status set to Resolved
    if (val === 'resolved') {
        generateKnowledgeArticle(email);
    }
}

// Dynamically generate a Knowledge Base article from a resolved email
function generateKnowledgeArticle(email) {
    // Check if article already exists for this email
    const exists = kbArticles.find(art => art.id === `kb-${email.id}`);
    if (exists) return;
    
    // Map email details into a structured KB document
    const newArticle = {
        id: `kb-${email.id}`,
        title: `${email.category} Mitigation Protocol: ${email.subject.replace('Customs Hold: ', '').replace('Inventory Alert: ', '').replace('Logistics Alert: ', '').replace('Compliance Alert: ', '')}`,
        problem: email.subject,
        background: email.body,
        cause: email.rootCause,
        resolution: `Successfully executed the following actions:\n` + email.actions.map((act, idx) => `${idx + 1}. ${act.text}`).join('\n') + `\n\nAI drafted and approved email response dispatched through Outlook client backend.`,
        prevention: `Conduct standard supplier verification audits and maintain buffer safe-stock configurations in ERP systems.`,
        suppliers: email.sender.substring(email.sender.indexOf('@') + 1),
        departments: email.tasks.map(t => t.owner).filter((v, i, a) => a.indexOf(v) === i).join(', ') || 'Operations',
        tags: [email.category.toLowerCase().replace(' ', '_'), 'auto_generated']
    };
    
    kbArticles.unshift(newArticle);
    renderKbList();
    showToast('Knowledge candidate auto-generated and added to article registry!');
}

// Render Knowledge base links
function renderKbList() {
    const container = document.getElementById('kb-articles-container');
    if (!container) return;
    
    container.innerHTML = '';
    kbArticles.forEach(art => {
        const card = document.createElement('div');
        card.className = 'kb-item';
        card.onclick = () => viewKbArticle(art.id);
        
        const tagSpans = art.tags.map(t => `<span class="kb-tag">${t}</span>`).join('');
        
        card.innerHTML = `
            <div class="kb-item-title">${art.title}</div>
            <div class="kb-item-tags">${tagSpans}</div>
        `;
        container.appendChild(card);
    });
}

// View particular Knowledge Base Article
function viewKbArticle(artId) {
    const art = kbArticles.find(a => a.id === artId);
    if (!art) return;
    
    // Hide details cards
    document.getElementById('empty-workspace-state').style.display = 'none';
    document.getElementById('workspace-details-card').style.display = 'none';
    document.getElementById('workspace-analysis-card').style.display = 'none';
    document.getElementById('workspace-actions-card').style.display = 'none';
    document.getElementById('workspace-reply-card').style.display = 'none';
    
    // Show KB viewer
    const viewer = document.getElementById('kb-detail-viewer');
    viewer.style.display = 'block';
    
    document.getElementById('kb-viewer-title').textContent = art.title;
    document.getElementById('kb-viewer-meta').textContent = `Database ID: ${art.id} | Department: ${art.departments}`;
    document.getElementById('kb-viewer-background').textContent = art.background;
    document.getElementById('kb-viewer-cause').textContent = art.cause;
    document.getElementById('kb-viewer-resolution').textContent = art.resolution;
    document.getElementById('kb-viewer-prevention').textContent = art.prevention;
    document.getElementById('kb-viewer-suppliers').textContent = art.suppliers;
    
    const tagsDiv = document.getElementById('kb-viewer-tags');
    tagsDiv.innerHTML = art.tags.map(t => `<span class="kb-tag">${t}</span>`).join('');
}

// Close KB detail and show workspace welcome
function closeKbArticle() {
    document.getElementById('kb-detail-viewer').style.display = 'none';
    if (selectedEmailId) {
        selectEmail(selectedEmailId);
    } else {
        document.getElementById('empty-workspace-state').style.display = 'flex';
    }
}

// Dismiss welcome onboarding modal
function closeWelcomeModal() {
    const modal = document.getElementById('welcome-modal');
    if (!modal) return;
    modal.classList.add('hiding');
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('hiding');
    }, 250);
}

// Dismiss success feedback modal
function closeSuccessModal() {
    const modal = document.getElementById('dispatch-success-modal');
    if (!modal) return;
    modal.classList.add('hiding');
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('hiding');
    }, 250);
}

// Spawns 80 falling particle nodes with randomized offsets, sizes, colors, and wind speeds
function triggerConfetti() {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    
    const colors = ['var(--neon-cyan)', 'var(--neon-blue)', 'var(--neon-purple)', 'var(--neon-green)', 'var(--neon-orange)', 'var(--neon-yellow)'];
    
    for (let i = 0; i < 80; i++) {
        const particle = document.createElement('div');
        particle.className = 'confetti-particle';
        
        const startX = Math.random() * 100;
        const drift = (Math.random() - 0.5) * 300;
        const duration = 2.0 + Math.random() * 2.0;
        const delay = Math.random() * 1.2;
        const size = 6 + Math.random() * 8;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.left = `${startX}vw`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.setProperty('--drift', `${drift}px`);
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        container.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, (duration + delay) * 1000);
    }
}

// Simulate or send Outlook reply through MS Graph API
async function simulateSendReply() {
    const email = emails.find(e => e.id === selectedEmailId);
    if (!email) return;
    
    const draftText = document.getElementById('reply-body-field').value;
    email.draftReply = draftText;
    
    const token = localStorage.getItem('m365_access_token');
    
    if (token) {
        showToast('Sending via Microsoft Graph SendMail API...');
        
        const payload = {
            message: {
                subject: `RE: ${email.subject}`,
                body: {
                    contentType: 'Text',
                    content: draftText
                },
                toRecipients: [
                    {
                        emailAddress: {
                            address: email.sender
                        }
                    }
                ]
            }
        };

        try {
            const response = await fetch('https://graph.microsoft.com/v1.0/me/sendMail', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                triggerConfetti();
                displaySuccessModal(email);
                showToast('Email successfully sent via M365 Outlook!');
                if (email.status === 'inbox' || email.status === 'in_review') {
                    handleStatusChange('action_pending');
                }
            } else {
                const errData = await response.json();
                showToast('M365 Send Failed: ' + (errData.error.message || response.statusText));
            }
        } catch(e) {
            console.error(e);
            showToast('M365 Send Failure: Check internet connection.');
        }
    } else {
        // Simulator Fallback
        showToast('Sending through MS Graph sendMail API (Simulator)...');
        
        setTimeout(() => {
            // Trigger surprise confetti particles burst!
            triggerConfetti();
            
            // Display beautiful dispatch success modal
            displaySuccessModal(email);
            
            showToast('Email successfully sent to supplier mailbox!');
            
            // Transition status to awaiting response
            if (email.status === 'inbox' || email.status === 'in_review') {
                handleStatusChange('action_pending');
            }
        }, 1200);
    }
}

function displaySuccessModal(email) {
    const successModal = document.getElementById('dispatch-success-modal');
    if (successModal) {
        document.getElementById('success-modal-message').textContent = `Vendor response successfully sent to ${email.sender} via Microsoft Graph sendMail payload.`;
        
        const nextStatus = (email.status === 'inbox' || email.status === 'in_review') ? 'Action Pending' : email.status.replace('_', ' ');
        document.getElementById('success-checklist-status').innerHTML = `
            <span style="font-weight: bold; color: var(--neon-green);">✓</span>
            <span>Triage Status Level: ${nextStatus}</span>
        `;
        
        successModal.style.display = 'flex';
    }
}

// Toast alerts helper
function showToast(msg) {
    const toast = document.getElementById('toast-bar');
    const toastMsg = document.getElementById('toast-message');
    
    toastMsg.textContent = msg;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}

// Custom Email Simulator Modal controls
function openSimulatorModal() {
    document.getElementById('simulator-modal').style.display = 'flex';
}

function closeSimulatorModal() {
    document.getElementById('simulator-modal').style.display = 'none';
    // Clear form inputs
    document.getElementById('sim-sender').value = '';
    document.getElementById('sim-subject').value = '';
    document.getElementById('sim-body').value = '';
}

// Submit Custom simulated email and parse with a simple rule-based local AI Parser
function submitSimulatedEmail() {
    const sender = document.getElementById('sim-sender').value.trim() || 'vendor-relations@suppliers.com';
    const subject = document.getElementById('sim-subject').value.trim() || 'Urgent shipment update';
    const body = document.getElementById('sim-body').value.trim() || 'No context provided.';
    
    closeSimulatorModal();
    
    // Local NLP rule parsing engine to simulate our AI Agent Pipeline!
    const lowercaseBody = body.toLowerCase() + ' ' + subject.toLowerCase();
    
    let category = 'Logistics Incident';
    let priority = 'medium';
    let urgencyScore = 55;
    let rootCause = 'Unspecified logistical trigger.';
    let businessImpact = 'Minor transit delay risk. Awaiting documentation check.';
    
    // Categorize
    if (lowercaseBody.includes('customs') || lowercaseBody.includes('border') || lowercaseBody.includes('declaration') || lowercaseBody.includes('tariff')) {
        category = 'Customs Delay';
        rootCause = 'Customs declaration hold or verification requirements at border ports.';
    } else if (lowercaseBody.includes('shortage') || lowercaseBody.includes('inventory') || lowercaseBody.includes('stockout') || lowercaseBody.includes('supply deficiency')) {
        category = 'Inventory Shortage';
        rootCause = 'Component manufacturing production shortage or supplier inventory stockout.';
    } else if (lowercaseBody.includes('delay') || lowercaseBody.includes('port') || lowercaseBody.includes('transit') || lowercaseBody.includes('congestion') || lowercaseBody.includes('carrier')) {
        category = 'Transportation Disruption';
        rootCause = 'Transit bottleneck, port congestion, or carrier logistics delay.';
    } else if (lowercaseBody.includes('compliance') || lowercaseBody.includes('regulatory') || lowercaseBody.includes('audit') || lowercaseBody.includes('reach') || lowercaseBody.includes('violation')) {
        category = 'Compliance Risk';
        rootCause = 'Missing certification paperwork, environmental code failures, or compliance lapses.';
    }
    
    // Prioritize & Urgency score
    if (lowercaseBody.includes('critical') || lowercaseBody.includes('shutdown') || lowercaseBody.includes('halt') || lowercaseBody.includes('stop') || lowercaseBody.includes('penalty')) {
        priority = 'critical';
        urgencyScore = 92;
        businessImpact = 'Immediate high-risk assembly line shutdown. Production metrics critical.';
    } else if (lowercaseBody.includes('urgent') || lowercaseBody.includes('delay') || lowercaseBody.includes('escalate') || lowercaseBody.includes('fine')) {
        priority = 'high';
        urgencyScore = 78;
        businessImpact = 'Potential delay in distribution schedules. Revenue deferral risk.';
    } else if (lowercaseBody.includes('minor') || lowercaseBody.includes('adjust') || lowercaseBody.includes('buffer')) {
        priority = 'low';
        urgencyScore = 35;
        businessImpact = 'Adjustable inventory schedules. Low revenue impact.';
    }
    
    // Generate suggested actions & tasks
    let actions = [
        { text: 'Analyze manifest logs for specific shipment identifiers.', checked: false },
        { text: 'Establish emergency meeting with supplier logistics teams.', checked: false },
        { text: 'Log new ETA details in central ERP dashboard tracking system.', checked: false }
    ];
    let tasks = [
        { title: 'Evaluate Supplier Incident', owner: 'Logistics', priority: priority.toUpperCase(), dueDate: '2026-06-26' }
    ];
    
    if (category === 'Customs Delay') {
        actions.unshift({ text: 'Acquire clearing records and COO paper copies from supplier.', checked: false });
        tasks.push({ title: 'Verify Customs Documents', owner: 'Compliance', priority: 'High', dueDate: '2026-06-26' });
    } else if (category === 'Inventory Shortage') {
        actions.unshift({ text: 'Review current safety stock buffer count inside warehouses.', checked: false });
        tasks.push({ title: 'Identify Emergency Sourcing Portals', owner: 'Procurement', priority: 'High', dueDate: '2026-06-25' });
    }
    
    // Draft reply generator
    const draftReply = `Dear Vendor Team,\n\nWe have received your notification regarding: "${subject}".\n\nThis disruption impacts our production operations. Our administrative officers are reviewing the timeline. Please provide the exact carrier tracking reference and recovery ETA immediately.\n\nRegards,\nSignalOps Operations Command`;
    
    // Construct new email object
    const newEmail = {
        id: `email-${Date.now()}`,
        sender: sender,
        subject: subject,
        body: body,
        category: category,
        priority: priority,
        urgencyScore: urgencyScore,
        rootCause: rootCause,
        businessImpact: businessImpact,
        status: 'inbox',
        time: 'Just Now',
        actions: actions,
        tasks: tasks,
        draftReply: draftReply
    };
    
    // Insert at front
    emails.unshift(newEmail);
    
    // Re-render, count
    renderEmailList();
    updateDashboardMetrics();
    
    // Automatically select the newly ingested email to run the parsing visuals!
    selectEmail(newEmail.id);
    showToast('New Outlook email ingested! Commencing triage analysis...');
}

// Update risk board indicators based on email dataset
function updateDashboardMetrics() {
    let activeEmails = emails.filter(e => e.status !== 'resolved');
    
    let supplierCount = activeEmails.filter(e => e.category === 'Inventory Shortage').length;
    let inventoryCount = activeEmails.filter(e => e.category === 'Inventory Shortage').length;
    let transitCount = activeEmails.filter(e => e.category === 'Transportation Disruption' || e.category === 'Customs Delay').length;
    let complianceCount = activeEmails.filter(e => e.category === 'Compliance Risk').length;
    
    // Safety checks for M365 UI updates
    const supplierElem = document.getElementById('risk-supplier');
    const inventoryElem = document.getElementById('risk-inventory');
    const transportElem = document.getElementById('risk-transport');
    const complianceElem = document.getElementById('risk-compliance');

    if (supplierElem) supplierElem.querySelector('.risk-value').textContent = supplierCount;
    if (inventoryElem) inventoryElem.querySelector('.risk-value').textContent = inventoryCount;
    if (transportElem) transportElem.querySelector('.risk-value').textContent = transitCount;
    if (complianceElem) complianceElem.querySelector('.risk-value').textContent = complianceCount;
    
    // Adjust glowing alerts
    adjustRiskIndicatorClass('risk-supplier', supplierCount);
    adjustRiskIndicatorClass('risk-inventory', inventoryCount);
    adjustRiskIndicatorClass('risk-transport', transitCount);
    adjustRiskIndicatorClass('risk-compliance', complianceCount);
}

function adjustRiskIndicatorClass(elemId, count) {
    const elem = document.getElementById(elemId);
    if (!elem) return;
    
    elem.classList.remove('alert-active', 'alert-warning');
    if (count >= 2) {
        elem.classList.add('alert-active'); // Critical red highlight
    } else if (count === 1) {
        elem.classList.add('alert-warning'); // Warning orange highlight
    }
}

// Live filter search for inbox
function filterInbox() {
    const query = document.getElementById('inbox-search').value.toLowerCase();
    const cards = document.querySelectorAll('#email-list-container .email-card');
    
    emails.forEach((email, idx) => {
        const card = cards[idx];
        if (!card) return;
        
        const isMatch = email.subject.toLowerCase().includes(query) || 
                        email.sender.toLowerCase().includes(query) ||
                        email.body.toLowerCase().includes(query) ||
                        email.category.toLowerCase().includes(query);
                        
        card.style.display = isMatch ? 'block' : 'none';
    });
}

// Live filter search for knowledge base
function filterKb() {
    const query = document.getElementById('kb-search').value.toLowerCase();
    const kbItems = document.querySelectorAll('#kb-articles-container .kb-item');
    
    kbArticles.forEach((art, idx) => {
        const item = kbItems[idx];
        if (!item) return;
        
        const isMatch = art.title.toLowerCase().includes(query) ||
                        art.problem.toLowerCase().includes(query) ||
                        art.cause.toLowerCase().includes(query) ||
                        art.tags.some(t => t.toLowerCase().includes(query));
                        
        item.style.display = isMatch ? 'block' : 'none';
    });
}

// ==========================================
// MICROSOFT 365 OAUTH 2.0 PKCE & GRAPH API
// ==========================================

// PKCE Cryptographic string generators
function dec2hex(dec) {
    return ('0' + dec.toString(16)).slice(-2);
}

function generateCodeVerifier() {
    const array = new Uint32Array(56 / 2);
    window.crypto.getRandomValues(array);
    return Array.from(array, dec2hex).join('');
}

function sha256(plain) {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest('SHA-256', data);
}

function base64urlencode(a) {
    let str = "";
    const bytes = new Uint8Array(a);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        str += String.fromCharCode(bytes[i]);
    }
    return btoa(str)
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");
}

async function generateCodeChallenge(v) {
    const hashed = await sha256(v);
    return base64urlencode(hashed);
}

// Restore UI Settings inputs from localStorage
function initializeM365UI() {
    const clientId = localStorage.getItem('m365_client_id');
    const tenantId = localStorage.getItem('m365_tenant_id') || 'common';
    const token = localStorage.getItem('m365_access_token');
    
    // Config panel inside main dashboard
    const clientIdInput = document.getElementById('m365-client-id');
    const tenantIdInput = document.getElementById('m365-tenant-id');
    if (clientIdInput && clientId) clientIdInput.value = clientId;
    if (tenantIdInput) tenantIdInput.value = tenantId;

    // Config panel inside full-screen splash login gate
    const splashClientId = document.getElementById('splash-client-id');
    const splashTenantId = document.getElementById('splash-tenant-id');
    if (splashClientId && clientId) splashClientId.value = clientId;
    if (splashTenantId) splashTenantId.value = tenantId;

    updateM365UIState(token);
}

function updateM365UIState(token) {
    const badge = document.getElementById('m365-status-badge');
    const configForm = document.getElementById('m365-config-form');
    const connectedControls = document.getElementById('m365-connected-controls');
    const usernameElem = document.getElementById('m365-username');
    const splashScreen = document.getElementById('signin-splash-screen');
    
    if (token) {
        if (badge) {
            badge.textContent = "Connected";
            badge.className = "status-pill status-resolved";
            badge.style.background = "rgba(52, 199, 89, 0.15)";
            badge.style.color = "var(--neon-green)";
            badge.style.borderColor = "rgba(52, 199, 89, 0.2)";
        }
        
        if (configForm) configForm.style.display = 'none';
        if (connectedControls) connectedControls.style.display = 'flex';
        
        const cachedUser = localStorage.getItem('m365_user_principal') || 'Outlook User';
        if (usernameElem) usernameElem.textContent = cachedUser;

        // Hide full-screen login splash if connected
        if (splashScreen) splashScreen.style.display = 'none';
    } else {
        if (badge) {
            badge.textContent = "Disconnected";
            badge.className = "status-pill status-inbox";
            badge.style.background = "rgba(255, 59, 48, 0.1)";
            badge.style.color = "var(--neon-red)";
            badge.style.borderColor = "rgba(255, 59, 48, 0.2)";
        }
        
        if (configForm) configForm.style.display = 'flex';
        if (connectedControls) connectedControls.style.display = 'none';

        // Show full-screen login splash if disconnected and not in simulator mode
        const isSimulatorMode = sessionStorage.getItem('offline_simulator_mode') === 'true';
        if (splashScreen) {
            splashScreen.style.display = isSimulatorMode ? 'none' : 'flex';
        }
    }
}

// Redirect client to Microsoft OAuth Auth endpoint from main panel
async function connectM365() {
    const clientIdInput = document.getElementById('m365-client-id');
    const tenantIdInput = document.getElementById('m365-tenant-id');
    if (!clientIdInput) return;
    await triggerM365Auth(clientIdInput.value.trim(), tenantIdInput ? tenantIdInput.value.trim() : 'common');
}

// Redirect client to Microsoft OAuth Auth endpoint from Splash Page
async function connectSplashM365() {
    const clientIdInput = document.getElementById('splash-client-id');
    const tenantIdInput = document.getElementById('splash-tenant-id');
    if (!clientIdInput) return;
    await triggerM365Auth(clientIdInput.value.trim(), tenantIdInput ? tenantIdInput.value.trim() : 'common');
}

// Shared auth redirection logic
async function triggerM365Auth(clientId, tenantId) {
    tenantId = tenantId || 'common';
    
    if (!clientId) {
        showToast('Error: Client Application ID is required.');
        return;
    }

    localStorage.setItem('m365_client_id', clientId);
    localStorage.setItem('m365_tenant_id', tenantId);

    const verifier = generateCodeVerifier();
    sessionStorage.setItem('m365_code_verifier', verifier);
    
    const challenge = await generateCodeChallenge(verifier);
    const redirectUri = window.location.origin + window.location.pathname;

    const authUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize` +
        `?client_id=${clientId}` +
        `&response_type=code` +
        `&redirect_uri=${encodeURIComponent(redirectUri)}` +
        `&response_mode=query` +
        `&scope=${encodeURIComponent('User.Read Mail.Read Mail.Send Files.ReadWrite offline_access')}` +
        `&code_challenge=${challenge}` +
        `&code_challenge_method=S256`;

    showToast('Redirecting to Microsoft 365 Login...');
    setTimeout(() => {
        window.location.href = authUrl;
    }, 1000);
}

// Enter Simulator Sandbox directly without logging in (Bypass M365 Auth)
function enterSimulatorMode() {
    sessionStorage.setItem('offline_simulator_mode', 'true');
    const splashScreen = document.getElementById('signin-splash-screen');
    if (splashScreen) {
        splashScreen.classList.add('hiding');
        setTimeout(() => {
            splashScreen.style.display = 'none';
            splashScreen.classList.remove('hiding');
            showToast('Offline Simulator Sandbox Loaded.');
        }, 250);
    }
}

// Clear cached OAuth token credentials
function disconnectM365() {
    localStorage.removeItem('m365_access_token');
    localStorage.removeItem('m365_refresh_token');
    localStorage.removeItem('m365_user_principal');
    sessionStorage.removeItem('offline_simulator_mode');
    
    updateM365UIState(null);
    
    // Force show login splash screen
    const splashScreen = document.getElementById('signin-splash-screen');
    if (splashScreen) splashScreen.style.display = 'flex';
    
    showToast('Microsoft 365 connection closed.');
}

// Callback verification handler
async function checkM365Callback() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    if (!code) return Promise.resolve();
    
    const clientId = localStorage.getItem('m365_client_id');
    const tenantId = localStorage.getItem('m365_tenant_id') || 'common';
    const verifier = sessionStorage.getItem('m365_code_verifier');
    
    if (!clientId || !verifier) {
        showToast('Callback Error: Missing Client ID or crypt verifier.');
        return Promise.resolve();
    }
    
    showToast('Exchanging code for credentials...');
    
    const redirectUri = window.location.origin + window.location.pathname;
    const bodyParams = new URLSearchParams({
        client_id: clientId,
        scope: 'User.Read Mail.Read Mail.Send Files.ReadWrite offline_access',
        code: code,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
        code_verifier: verifier
    });

    try {
        const response = await fetch(`https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: bodyParams.toString()
        });

        const data = await response.json();
        
        if (data.access_token) {
            localStorage.setItem('m365_access_token', data.access_token);
            if (data.refresh_token) {
                localStorage.setItem('m365_refresh_token', data.refresh_token);
            }
            
            // Clear code URL variables
            const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
            window.history.replaceState({path: cleanUrl}, '', cleanUrl);
            
            await fetchUserProfile(data.access_token);
            showToast('Connected to Microsoft 365 Outlook Feed!');
        } else {
            console.error('Token Exchange Error:', data);
            showToast('Token Handshake failed: ' + (data.error_description || 'Unknown error'));
        }
    } catch (err) {
        console.error(err);
        showToast('CORS/Network error during token exchange.');
    }
    
    return Promise.resolve();
}

async function fetchUserProfile(token) {
    try {
        const response = await fetch('https://graph.microsoft.com/v1.0/me', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('m365_user_principal', data.userPrincipalName);
        }
    } catch(e) {
        console.error(e);
    }
}

// Sync live emails from Microsoft Graph API
async function syncM365Inbox() {
    const token = localStorage.getItem('m365_access_token');
    if (!token) {
        showToast('Please login to Microsoft 365 first.');
        return;
    }
    
    showToast('Fetching latest Outlook messages...');
    
    try {
        const response = await fetch('https://graph.microsoft.com/v1.0/me/messages?$top=5&$select=id,sender,subject,bodyPreview,body,receivedDateTime', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (!response.ok) {
            const errData = await response.json();
            if (errData.error && errData.error.code === 'InvalidAuthenticationToken') {
                showToast('Authentication Expired. Refreshing token...');
                const refreshed = await refreshM365Token();
                if (refreshed) {
                    syncM365Inbox();
                } else {
                    disconnectM365();
                }
            } else {
                showToast('Sync Failed: ' + (errData.error.message || response.statusText));
            }
            return;
        }

        const data = await response.json();
        const messages = data.value;
        
        if (!messages || messages.length === 0) {
            showToast('Inbox is clean. No new messages found.');
            return;
        }

        let syncedCount = 0;

        messages.forEach(msg => {
            if (!msg.sender || !msg.sender.emailAddress) return;

            const senderEmail = msg.sender.emailAddress.address;
            const subjectText = msg.subject || 'No Subject';
            const bodyText = msg.bodyPreview || msg.body.content || 'No Content';
            
            const alreadyExists = emails.some(e => e.id === `m365-${msg.id}`);
            if (alreadyExists) return;

            // Simple NLP parser for real emails
            const lowercaseText = (subjectText + ' ' + bodyText).toLowerCase();
            
            let category = 'Logistics Incident';
            let priority = 'medium';
            let urgencyScore = 60;
            let rootCause = 'Unspecified logistical trigger.';
            let businessImpact = 'Checking safety buffer status.';
            
            if (lowercaseText.includes('customs') || lowercaseText.includes('border') || lowercaseText.includes('declaration')) {
                category = 'Customs Delay';
                rootCause = 'Customs hold or paperwork verification at import terminals.';
            } else if (lowercaseText.includes('shortage') || lowercaseText.includes('inventory') || lowercaseText.includes('out of stock')) {
                category = 'Inventory Shortage';
                rootCause = 'Component supply deficit or vendor raw materials lack.';
            } else if (lowercaseText.includes('delay') || lowercaseText.includes('port') || lowercaseText.includes('transit')) {
                category = 'Transportation Disruption';
                rootCause = 'Port congestion, routing bottlenecks, or shipping delays.';
            } else if (lowercaseText.includes('compliance') || lowercaseText.includes('regulatory') || lowercaseText.includes('reach')) {
                category = 'Compliance Risk';
                rootCause = 'Missing compliance declaration or failed regulatory audits.';
            }
            
            if (lowercaseText.includes('critical') || lowercaseText.includes('shutdown') || lowercaseText.includes('halt') || lowercaseText.includes('fine')) {
                priority = 'critical';
                urgencyScore = 94;
                businessImpact = 'Immediate high-risk assembly line shutdown. Material shortages.';
            } else if (lowercaseText.includes('urgent') || lowercaseText.includes('delay') || lowercaseText.includes('escalate')) {
                priority = 'high';
                urgencyScore = 78;
                businessImpact = 'Delivery timeline delay. Customer ETA disruption.';
            }

            const formatTime = new Date(msg.receivedDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            
            const actions = [
                { text: `Contact sender at ${senderEmail} to establish recovery timelines.`, checked: false },
                { text: 'Review component stock levels in ERP dashboard.', checked: false },
                { text: 'Log ETA parameters in track-and-trace registry.', checked: false }
            ];

            const tasks = [
                { title: `Investigate exception: ${subjectText.substring(0, 30)}`, owner: 'Procurement', priority: priority.toUpperCase(), dueDate: '2026-06-26' }
            ];

            const draftReply = `Dear Vendor Team,\n\nWe are processing your email exception regarding: "${subjectText}".\n\nOur administrative offices are checking the safety stock levels. Please provide exact recovery dates and tracing references.\n\nRegards,\nSignalOps Operations Command`;

            const m365Email = {
                id: `m365-${msg.id}`,
                sender: senderEmail,
                subject: subjectText,
                body: bodyText,
                category: category,
                priority: priority,
                urgencyScore: urgencyScore,
                rootCause: rootCause,
                businessImpact: businessImpact,
                status: 'inbox',
                time: formatTime,
                actions: actions,
                tasks: tasks,
                draftReply: draftReply
            };

            emails.unshift(m365Email);
            syncedCount++;
        });

        renderEmailList();
        updateDashboardMetrics();
        showToast(`Sync Completed: Synced ${syncedCount} new messages.`);

        if (syncedCount > 0 && emails[0].id.startsWith('m365-')) {
            selectEmail(emails[0].id);
        }
    } catch(err) {
        console.error(err);
        showToast('Sync Failed: Check network connectivity.');
    }
}

// Token refresh procedure
async function refreshM365Token() {
    const refreshToken = localStorage.getItem('m365_refresh_token');
    const clientId = localStorage.getItem('m365_client_id');
    const tenantId = localStorage.getItem('m365_tenant_id') || 'common';
    
    if (!refreshToken || !clientId) return false;

    try {
        const response = await fetch(`https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                client_id: clientId,
                grant_type: 'refresh_token',
                refresh_token: refreshToken,
                scope: 'User.Read Mail.Read Mail.Send Files.ReadWrite offline_access'
            })
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('m365_access_token', data.access_token);
            if (data.refresh_token) {
                localStorage.setItem('m365_refresh_token', data.refresh_token);
            }
            return true;
        }
    } catch(e) {
        console.error(e);
    }
    return false;
}

// Upload attachments directly to Microsoft OneDrive folder
async function saveToOneDrive(emailId, attachmentIndex) {
    const email = emails.find(e => e.id === emailId);
    if (!email || !email.attachments || !email.attachments[attachmentIndex]) return;
    
    const att = email.attachments[attachmentIndex];
    const token = localStorage.getItem('m365_access_token');
    
    if (token) {
        showToast(`Uploading ${att.name} to OneDrive via Graph API...`);
        
        try {
            // Put request to upload content to root:/SignalConsole/filename
            const response = await fetch(`https://graph.microsoft.com/v1.0/me/drive/root:/SignalConsole/${att.name}:/content`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'text/plain'
                },
                body: att.content
            });
            
            if (response.ok) {
                showToast(`Successfully uploaded ${att.name} to OneDrive folder /SignalConsole/`);
            } else {
                const errData = await response.json();
                showToast('OneDrive Upload Failed: ' + (errData.error.message || response.statusText));
            }
        } catch(e) {
            console.error(e);
            showToast('OneDrive Network Error: Check internet connection.');
        }
    } else {
        // Simulator fallback
        showToast(`Simulating OneDrive upload for ${att.name}...`);
        setTimeout(() => {
            showToast(`Document ${att.name} successfully saved to OneDrive folder (/SignalConsole/)`);
        }, 1200);
    }
}

