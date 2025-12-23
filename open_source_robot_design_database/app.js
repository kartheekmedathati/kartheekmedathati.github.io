// Robot data
const robotsData = [
  {
    name: 'TidyBot++',
    category: 'Mobile Manipulators',
    manufacturer: 'Princeton University',
    type: 'Mobile Platform + Arm Mount',
    dof: '3 (base holonomic) + 5-7 (mounted arm)',
    dofNumeric: 10,
    reach_cm: '45-75 (arm dependent)',
    reachNumeric: 60,
    weight_kg: '26-45 (base only)',
    weightNumeric: 35.5,
    payload_kg: '5-20 (arm dependent)',
    payloadNumeric: 12.5,
    price_usd: '$5,400-8,000',
    priceNumeric: 6700,
    price_tier: 'Mid-range',
    power_consumption: '288-2160 Wh battery',
    runtime_hours: '4.5-8',
    runtimeNumeric: 6.25,
    assembly_hours: '10-40',
    assemblyNumeric: 25,
    license: 'MIT/BSD-style',
    cad_available: 'Yes (Onshape + STEP)',
    cad_formats: 'STEP, Onshape',
    github: 'https://github.com/jimmyyhwu/tidybot2',
    units_deployed: '40+ research institutions',
    key_features: [
      'Holonomic omnidirectional mobility',
      'Phone-based teleoperation',
      'Multiple arm mounting compatibility',
      'Compliant control system'
    ],
    support_level: 'Research community + Princeton',
    maturity: 'Research',
    commercial_use: 'Limited (research-focused)'
  },
  {
    name: 'K-Bot',
    category: 'Humanoid Robots',
    manufacturer: 'K-Scale Labs',
    type: 'Full Humanoid Bipedal',
    dof: '7 arms (14 total) + 6+ legs + torso',
    dofNumeric: 20,
    reach_cm: '~80',
    reachNumeric: 80,
    weight_kg: '34',
    weightNumeric: 34,
    payload_kg: '10 per arm',
    payloadNumeric: 10,
    price_usd: '$8,999-10,999',
    priceNumeric: 9999,
    price_tier: 'Affordable humanoid',
    power_consumption: 'Modular battery',
    runtime_hours: '4',
    runtimeNumeric: 4,
    assembly_hours: '0 (prebuilt)',
    assemblyNumeric: 0,
    license: 'Open-source (K-OS/Rust)',
    cad_available: 'Yes',
    cad_formats: 'STL, Design files',
    github: 'https://github.com/kscale-labs',
    units_deployed: '500+ planned',
    key_features: [
      'Full autonomy roadmap (2028)',
      'VLA (Vision-Language-Action) integration',
      'Sim-to-real training',
      'Free upgrades to full autonomy'
    ],
    support_level: 'Commercial + community',
    maturity: 'Production',
    commercial_use: 'Yes'
  },
  {
    name: 'OpenArm',
    category: 'Robotic Arms',
    manufacturer: 'Enactic (Tokyo)',
    type: '7-DOF Humanoid Arm',
    dof: '7 per arm',
    dofNumeric: 7,
    reach_cm: '63.3',
    reachNumeric: 63.3,
    weight_kg: '5.5 per arm',
    weightNumeric: 5.5,
    payload_kg: '6 peak (4.1 nominal)',
    payloadNumeric: 6,
    price_usd: '$3,240-6,500',
    priceNumeric: 4870,
    price_tier: 'Low-cost arm',
    power_consumption: '24V DC',
    runtime_hours: 'Continuous',
    runtimeNumeric: 999,
    assembly_hours: '20-40 (DIY) or 0 (prebuilt)',
    assemblyNumeric: 30,
    license: 'Apache-2.0 / CERN-OHL-S-2.0',
    cad_available: 'Yes',
    cad_formats: 'Fusion 360, STEP',
    github: 'https://github.com/enactic/openarm',
    units_deployed: '100+',
    key_features: [
      'High backdrivability',
      'Safe human-robot interaction',
      'Teleoperation with gravity compensation',
      '1 kHz CAN-FD control'
    ],
    support_level: 'Commercial (Enactic) + community',
    maturity: 'Production',
    commercial_use: 'Yes'
  },
  {
    name: 'Reachy Mini',
    category: 'Desktop Robots',
    manufacturer: 'Pollen Robotics / Hugging Face',
    type: 'Desktop Interaction Robot',
    dof: '6 head + 1 body + 2 antennas',
    dofNumeric: 9,
    reach_cm: '~35',
    reachNumeric: 35,
    weight_kg: '1.5-1.7',
    weightNumeric: 1.6,
    payload_kg: 'Limited',
    payloadNumeric: 0.5,
    price_usd: '$299-449',
    priceNumeric: 374,
    price_tier: 'Budget entry-level',
    power_consumption: '~50W',
    runtime_hours: 'Continuous (Lite) / 4-6 (Wireless)',
    runtimeNumeric: 5,
    assembly_hours: '2-4',
    assemblyNumeric: 3,
    license: 'MIT / Creative Commons',
    cad_available: 'Yes',
    cad_formats: '3D-printable STL + CAD',
    github: 'https://github.com/pollen-robotics/reachy-mini',
    units_deployed: '2000+ preorders',
    key_features: [
      '1.7M+ Hugging Face model integration',
      'Python SDK + 15 demo apps',
      'Simulation SDK available',
      'Built for HRI and AI exploration'
    ],
    support_level: 'Commercial (Hugging Face) + large community',
    maturity: 'Production',
    commercial_use: 'Yes (MIT license)'
  },
  {
    name: 'ORCA Hand',
    category: 'Robotic Hands',
    manufacturer: 'ETH Zurich',
    type: 'Dexterous Hand + Wrist',
    dof: '17 total (16 fingers + 1 wrist)',
    dofNumeric: 17,
    reach_cm: 'N/A (hand only)',
    reachNumeric: 0,
    weight_kg: '1.3',
    weightNumeric: 1.3,
    payload_kg: 'Limited to servo capacity',
    payloadNumeric: 2,
    price_usd: '$2,200 (DIY) / $5,937 (assembled)',
    priceNumeric: 4069,
    price_tier: 'Low-cost dexterous hand',
    power_consumption: '12V DC',
    runtime_hours: 'Continuous',
    runtimeNumeric: 999,
    assembly_hours: '8',
    assemblyNumeric: 8,
    license: 'MIT / Creative Commons (non-commercial)',
    cad_available: 'Yes',
    cad_formats: 'STL (3D-printable), CAD models',
    github: 'https://github.com/orcahand/orca_core',
    units_deployed: 'Research labs only',
    key_features: [
      'Fully 3D-printable design',
      'Integrated tactile sensors',
      'Poppable joints reduce complexity',
      '>10,000 operation cycles tested'
    ],
    support_level: 'Research community',
    maturity: 'Research',
    commercial_use: 'Limited (non-commercial license)'
  },
  {
    name: 'Amazing Hand',
    category: 'Robotic Hands',
    manufacturer: 'Pollen Robotics / Hugging Face',
    type: '3D-Printable Hand',
    dof: '8 (4 fingers x 2 DoF)',
    dofNumeric: 8,
    reach_cm: 'N/A (hand only)',
    reachNumeric: 0,
    weight_kg: '0.4',
    weightNumeric: 0.4,
    payload_kg: 'Limited to servo capacity',
    payloadNumeric: 1,
    price_usd: '$220-275',
    priceNumeric: 248,
    price_tier: 'Ultra-low-cost',
    power_consumption: '30-50W (estimated)',
    runtime_hours: 'Continuous',
    runtimeNumeric: 999,
    assembly_hours: '3-6',
    assemblyNumeric: 4.5,
    license: 'MIT',
    cad_available: 'Yes',
    cad_formats: 'Fully 3D-printable',
    github: 'https://github.com/pollen-robotics/AmazingHand',
    units_deployed: 'Community builds (count unknown)',
    key_features: [
      'Fully 3D-printable',
      'Hobby-grade servo powered',
      'Soft TPU shells for contact',
      'Opposable thumb capability'
    ],
    support_level: 'Community',
    maturity: 'Research',
    commercial_use: 'Yes (MIT license)'
  },
  {
    name: 'DexHand',
    category: 'Robotic Hands',
    manufacturer: 'The Robot Studio',
    type: 'Dexterous Humanoid Hand',
    dof: '16-20',
    dofNumeric: 18,
    reach_cm: 'N/A (hand only)',
    reachNumeric: 0,
    weight_kg: '1.2',
    weightNumeric: 1.2,
    payload_kg: 'Servo-dependent',
    payloadNumeric: 2,
    price_usd: '$5,000-8,000',
    priceNumeric: 6500,
    price_tier: 'Mid-range dexterous',
    power_consumption: 'Multiple DYNAMIXEL servos',
    runtime_hours: 'Continuous',
    runtimeNumeric: 999,
    assembly_hours: '20-40',
    assemblyNumeric: 30,
    license: 'Open-source',
    cad_available: 'Yes',
    cad_formats: 'OnShape, STL',
    github: 'https://github.com/TheRobotStudio/Dexhand',
    units_deployed: '20+ community builds',
    key_features: [
      'Fully dexterous humanoid hand',
      'DYNAMIXEL servo-actuated',
      'ROS2 integration',
      'Assembly videos available'
    ],
    support_level: 'Community + Robot Studio guides',
    maturity: 'Research',
    commercial_use: 'Yes'
  },
  {
    name: 'Reachy 2',
    category: 'Humanoid Robots',
    manufacturer: 'Pollen Robotics',
    type: 'Premium Research Humanoid',
    dof: '8 arms + expressive head',
    dofNumeric: 10,
    reach_cm: '~70',
    reachNumeric: 70,
    weight_kg: '~50',
    weightNumeric: 50,
    payload_kg: 'Research-limited',
    payloadNumeric: 3,
    price_usd: '$70,000',
    priceNumeric: 70000,
    price_tier: 'Premium research',
    power_consumption: 'High-end',
    runtime_hours: '6-8',
    runtimeNumeric: 7,
    assembly_hours: '0 (factory assembled)',
    assemblyNumeric: 0,
    license: 'Proprietary (research partnerships)',
    cad_available: 'Partial (partners only)',
    cad_formats: 'Proprietary',
    github: 'https://github.com/pollen-robotics',
    units_deployed: '50+ at top institutions',
    key_features: [
      'Used by MIT, CMU, Cornell',
      'High reliability for research',
      'Premium HRI capabilities',
      'Established support infrastructure'
    ],
    support_level: 'Direct commercial support',
    maturity: 'Production',
    commercial_use: 'Research partnerships only'
  }
];

// State management
let currentSort = { column: null, direction: 'asc' };
let filteredRobots = [...robotsData];
let selectedRobots = [];

// Initialize app
function init() {
  renderRobotsTable();
  renderCategoryTables();
  setupEventListeners();
  updateRobotCount();
}

// Render main robots table
function renderRobotsTable() {
  const tbody = document.getElementById('robots-tbody');
  tbody.innerHTML = '';

  filteredRobots.forEach((robot, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>
        <div class="checkbox-wrapper">
          <input type="checkbox" id="robot-${index}" data-robot-name="${robot.name}">
        </div>
      </td>
      <td class="name" style="cursor: pointer;" data-robot-index="${index}">${robot.name}<br><small style="color: var(--color-text-secondary);">${robot.manufacturer}</small></td>
      <td class="category">${robot.category}</td>
      <td>${robot.price_usd}</td>
      <td>${robot.dof}</td>
      <td>${robot.payload_kg}</td>
      <td>${robot.weight_kg}</td>
      <td><span class="badge">${robot.license}</span></td>
      <td><span class="badge badge-${robot.maturity.toLowerCase()}">${robot.maturity}</span></td>
      <td>${robot.cad_available.startsWith('Yes') ? '✓' : '✗'}</td>
    `;
    tbody.appendChild(row);
  });

  // Add click handlers for expandable rows
  document.querySelectorAll('[data-robot-index]').forEach(cell => {
    cell.addEventListener('click', function() {
      const index = parseInt(this.dataset.robotIndex);
      toggleExpandedRow(this.closest('tr'), filteredRobots[index]);
    });
  });

  // Add checkbox handlers
  document.querySelectorAll('input[type="checkbox"][data-robot-name]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const robotName = this.dataset.robotName;
      if (this.checked) {
        selectedRobots.push(robotName);
      } else {
        selectedRobots = selectedRobots.filter(name => name !== robotName);
      }
    });
  });
}

// Toggle expanded row details
function toggleExpandedRow(row, robot) {
  const existingExpanded = row.nextElementSibling;
  if (existingExpanded && existingExpanded.classList.contains('expanded-row')) {
    existingExpanded.remove();
    row.classList.remove('expanded');
    return;
  }

  // Remove any other expanded rows
  document.querySelectorAll('.expanded-row').forEach(r => r.remove());
  document.querySelectorAll('tr.expanded').forEach(r => r.classList.remove('expanded'));

  row.classList.add('expanded');
  const expandedRow = document.createElement('tr');
  expandedRow.classList.add('expanded-row');
  expandedRow.innerHTML = `
    <td colspan="10">
      <div class="expanded-content">
        <div class="expanded-grid">
          <div class="expanded-section">
            <h4>Technical Specifications</h4>
            <ul>
              <li>DoF: ${robot.dof}</li>
              <li>Reach: ${robot.reach_cm} cm</li>
              <li>Weight: ${robot.weight_kg} kg</li>
              <li>Payload: ${robot.payload_kg} kg</li>
              <li>Power: ${robot.power_consumption}</li>
              <li>Runtime: ${robot.runtime_hours} hours</li>
            </ul>
          </div>
          <div class="expanded-section">
            <h4>Key Features</h4>
            <ul>
              ${robot.key_features.map(f => `<li>${f}</li>`).join('')}
            </ul>
          </div>
          <div class="expanded-section">
            <h4>Deployment &amp; Support</h4>
            <ul>
              <li>Units Deployed: ${robot.units_deployed}</li>
              <li>Support: ${robot.support_level}</li>
              <li>Assembly Time: ${robot.assembly_hours} hours</li>
              <li>Commercial Use: ${robot.commercial_use}</li>
            </ul>
          </div>
          <div class="expanded-section">
            <h4>Resources</h4>
            <ul>
              <li>CAD: ${robot.cad_formats}</li>
              <li>License: ${robot.license}</li>
            </ul>
            <div class="link-list" style="margin-top: var(--space-12);">
              <a href="${robot.github}" target="_blank">GitHub Repository →</a>
            </div>
          </div>
        </div>
      </div>
    </td>
  `;
  row.after(expandedRow);
}

// Render category-specific tables
function renderCategoryTables() {
  // Mobile Manipulators
  const mobileTbody = document.getElementById('mobile-tbody');
  const mobileRobots = robotsData.filter(r => r.category === 'Mobile Manipulators');
  mobileTbody.innerHTML = mobileRobots.map(r => `
    <tr>
      <td class="name">${r.name}<br><small style="color: var(--color-text-secondary);">${r.manufacturer}</small></td>
      <td>${r.price_usd}</td>
      <td>${r.dof}</td>
      <td>${r.payload_kg}</td>
      <td>${r.runtime_hours}</td>
      <td>${r.license}</td>
    </tr>
  `).join('');

  // Humanoid Robots
  const humanoidTbody = document.getElementById('humanoid-tbody');
  const humanoidRobots = robotsData.filter(r => r.category === 'Humanoid Robots');
  humanoidTbody.innerHTML = humanoidRobots.map(r => `
    <tr>
      <td class="name">${r.name}<br><small style="color: var(--color-text-secondary);">${r.manufacturer}</small></td>
      <td>${r.price_usd}</td>
      <td>${r.dof}</td>
      <td>${r.payload_kg}</td>
      <td>${r.weight_kg}</td>
      <td><span class="badge badge-${r.maturity.toLowerCase()}">${r.maturity}</span></td>
    </tr>
  `).join('');

  // Robotic Arms
  const armsTbody = document.getElementById('arms-tbody');
  const armsRobots = robotsData.filter(r => r.category === 'Robotic Arms');
  armsTbody.innerHTML = armsRobots.map(r => `
    <tr>
      <td class="name">${r.name}<br><small style="color: var(--color-text-secondary);">${r.manufacturer}</small></td>
      <td>${r.price_usd}</td>
      <td>${r.dof}</td>
      <td>${r.reach_cm}</td>
      <td>${r.payload_kg}</td>
      <td>${r.license}</td>
    </tr>
  `).join('');

  // Robotic Hands
  const handsTbody = document.getElementById('hands-tbody');
  const handsRobots = robotsData.filter(r => r.category === 'Robotic Hands');
  handsTbody.innerHTML = handsRobots.map(r => `
    <tr>
      <td class="name">${r.name}<br><small style="color: var(--color-text-secondary);">${r.manufacturer}</small></td>
      <td>${r.price_usd}</td>
      <td>${r.dof}</td>
      <td>${r.weight_kg}</td>
      <td>${r.assembly_hours}</td>
      <td>${r.license}</td>
    </tr>
  `).join('');
}

// Setup event listeners
function setupEventListeners() {
  // Tab switching
  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
      const tabName = this.dataset.tab;
      switchTab(tabName);
    });
  });

  // Sorting
  document.querySelectorAll('th.sortable').forEach(header => {
    header.addEventListener('click', function() {
      const column = this.dataset.sort;
      sortTable(column);
    });
  });

  // Filtering
  document.getElementById('search').addEventListener('input', applyFilters);
  document.getElementById('filter-price-min').addEventListener('input', applyFilters);
  document.getElementById('filter-price-max').addEventListener('input', applyFilters);
  document.getElementById('filter-license').addEventListener('change', applyFilters);
  document.getElementById('filter-maturity').addEventListener('change', applyFilters);

  // Reset filters
  document.getElementById('reset-filters').addEventListener('click', resetFilters);

  // Compare selected
  document.getElementById('compare-selected').addEventListener('click', compareSelected);

  // Export data
  document.getElementById('export-data').addEventListener('click', exportData);
}

// Switch tabs
function switchTab(tabName) {
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
  document.getElementById(`${tabName}-tab`).classList.add('active');
}

// Sort table
function sortTable(column) {
  const direction = currentSort.column === column && currentSort.direction === 'asc' ? 'desc' : 'asc';
  currentSort = { column, direction };

  // Update header indicators
  document.querySelectorAll('th.sortable').forEach(th => {
    th.classList.remove('sorted-asc', 'sorted-desc');
  });
  const header = document.querySelector(`th[data-sort="${column}"]`);
  header.classList.add(`sorted-${direction}`);

  // Sort data
  const columnMap = {
    'name': 'name',
    'category': 'category',
    'price': 'priceNumeric',
    'dof': 'dofNumeric',
    'payload': 'payloadNumeric',
    'weight': 'weightNumeric'
  };

  const sortKey = columnMap[column];
  filteredRobots.sort((a, b) => {
    let aVal = a[sortKey];
    let bVal = b[sortKey];
    
    if (typeof aVal === 'string') {
      aVal = aVal.toLowerCase();
      bVal = bVal.toLowerCase();
    }
    
    if (direction === 'asc') {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });

  renderRobotsTable();
}

// Apply filters
function applyFilters() {
  const search = document.getElementById('search').value.toLowerCase();
  const priceMin = parseFloat(document.getElementById('filter-price-min').value) || 0;
  const priceMax = parseFloat(document.getElementById('filter-price-max').value) || Infinity;
  const license = document.getElementById('filter-license').value;
  const maturity = document.getElementById('filter-maturity').value;

  filteredRobots = robotsData.filter(robot => {
    // Search filter
    const searchMatch = !search || 
      robot.name.toLowerCase().includes(search) ||
      robot.category.toLowerCase().includes(search) ||
      robot.manufacturer.toLowerCase().includes(search) ||
      robot.key_features.some(f => f.toLowerCase().includes(search));

    // Price filter
    const priceMatch = robot.priceNumeric >= priceMin && robot.priceNumeric <= priceMax;

    // License filter
    const licenseMatch = !license || robot.license.toLowerCase().includes(license.toLowerCase());

    // Maturity filter
    const maturityMatch = !maturity || robot.maturity === maturity;

    return searchMatch && priceMatch && licenseMatch && maturityMatch;
  });

  renderRobotsTable();
  updateRobotCount();
}

// Reset filters
function resetFilters() {
  document.getElementById('search').value = '';
  document.getElementById('filter-price-min').value = '';
  document.getElementById('filter-price-max').value = '';
  document.getElementById('filter-license').value = '';
  document.getElementById('filter-maturity').value = '';
  
  filteredRobots = [...robotsData];
  renderRobotsTable();
  updateRobotCount();
}

// Update robot count
function updateRobotCount() {
  const count = filteredRobots.length;
  document.getElementById('robot-count').textContent = `Showing ${count} robot${count !== 1 ? 's' : ''}`;
}

// Compare selected robots
function compareSelected() {
  if (selectedRobots.length === 0) {
    alert('Please select at least one robot to compare.');
    return;
  }

  if (selectedRobots.length > 3) {
    alert('Please select a maximum of 3 robots to compare.');
    return;
  }

  const comparisonContainer = document.getElementById('comparison-container');
  const comparisonGrid = document.getElementById('comparison-grid');
  
  comparisonContainer.style.display = 'block';
  comparisonGrid.innerHTML = '';

  selectedRobots.forEach(robotName => {
    const robot = robotsData.find(r => r.name === robotName);
    if (!robot) return;

    const card = document.createElement('div');
    card.classList.add('comparison-card');
    card.innerHTML = `
      <h3>${robot.name}</h3>
      <p style="color: var(--color-text-secondary); margin-bottom: var(--space-16);">${robot.manufacturer}</p>
      
      <div class="spec-row">
        <span class="spec-label">Category</span>
        <span class="spec-value">${robot.category}</span>
      </div>
      <div class="spec-row">
        <span class="spec-label">Price</span>
        <span class="spec-value">${robot.price_usd}</span>
      </div>
      <div class="spec-row">
        <span class="spec-label">DoF</span>
        <span class="spec-value">${robot.dof}</span>
      </div>
      <div class="spec-row">
        <span class="spec-label">Payload</span>
        <span class="spec-value">${robot.payload_kg} kg</span>
      </div>
      <div class="spec-row">
        <span class="spec-label">Weight</span>
        <span class="spec-value">${robot.weight_kg} kg</span>
      </div>
      <div class="spec-row">
        <span class="spec-label">Runtime</span>
        <span class="spec-value">${robot.runtime_hours} hrs</span>
      </div>
      <div class="spec-row">
        <span class="spec-label">Assembly</span>
        <span class="spec-value">${robot.assembly_hours} hrs</span>
      </div>
      <div class="spec-row">
        <span class="spec-label">License</span>
        <span class="spec-value">${robot.license}</span>
      </div>
      <div class="spec-row">
        <span class="spec-label">Maturity</span>
        <span class="spec-value">${robot.maturity}</span>
      </div>
      <div class="spec-row">
        <span class="spec-label">Commercial Use</span>
        <span class="spec-value">${robot.commercial_use}</span>
      </div>
      
      <div style="margin-top: var(--space-16);">
        <strong style="display: block; margin-bottom: var(--space-8);">Key Features</strong>
        <ul style="margin: 0; padding-left: var(--space-20); font-size: var(--font-size-sm);">
          ${robot.key_features.map(f => `<li style="margin-bottom: var(--space-4);">${f}</li>`).join('')}
        </ul>
      </div>
      
      <div class="link-list">
        <a href="${robot.github}" target="_blank">GitHub Repository →</a>
      </div>
    `;
    comparisonGrid.appendChild(card);
  });

  // Scroll to comparison
  comparisonContainer.scrollIntoView({ behavior: 'smooth' });
}

// Export data
function exportData() {
  const exportOutput = document.getElementById('export-output');
  exportOutput.style.display = 'block';
  
  let output = 'OPEN-SOURCE ROBOT DESIGN COMPARISON SUMMARY\n';
  output += '='.repeat(60) + '\n\n';
  output += `Total Robots: ${filteredRobots.length}\n\n`;

  filteredRobots.forEach((robot, i) => {
    output += `${i + 1}. ${robot.name} (${robot.manufacturer})\n`;
    output += `   Category: ${robot.category}\n`;
    output += `   Price: ${robot.price_usd}\n`;
    output += `   DoF: ${robot.dof}\n`;
    output += `   Payload: ${robot.payload_kg} kg\n`;
    output += `   Weight: ${robot.weight_kg} kg\n`;
    output += `   Runtime: ${robot.runtime_hours} hours\n`;
    output += `   Assembly: ${robot.assembly_hours} hours\n`;
    output += `   License: ${robot.license}\n`;
    output += `   Maturity: ${robot.maturity}\n`;
    output += `   Commercial Use: ${robot.commercial_use}\n`;
    output += `   GitHub: ${robot.github}\n`;
    output += `   Deployed: ${robot.units_deployed}\n`;
    output += '\n';
  });

  exportOutput.textContent = output;
  exportOutput.scrollIntoView({ behavior: 'smooth' });
}

// Initialize on load
init();