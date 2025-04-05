// Quote Landing Page
const quotes = [
    {
        text: "Do not save what is left after spending, but spend what is left after saving.",
        author: "Warren Buffett"
    },
    {
        text: "The habit of saving is itself an education; it fosters every virtue, teaches self-denial, cultivates the sense of order, trains to forethought.",
        author: "T.T. Munger"
    },
    {
        text: "Financial freedom is available to those who learn about it and work for it.",
        author: "Robert Kiyosaki"
    },
    {
        text: "Beware of little expenses; a small leak will sink a great ship.",
        author: "Benjamin Franklin"
    },
    {
        text: "The goal isn't more money. The goal is living life on your terms.",
        author: "Chris Reining"
    },
    {
        text: "Financial peace isn't the acquisition of stuff. It's learning to live on less than you make.",
        author: "Dave Ramsey"
    }
];

// Game Data
const gameData = {
    currentLevel: 1,
    score: 0,
    coins: 1000,
    progress: 0,
    completedLevels: 0,
    unlockedAchievements: [],
    scenarios: [
        {
            level: 1,
            title: "Budgeting Basics",
            description: "You've just received your first paycheck of Rs-2,000. How would you allocate this money?",
            options: [
                {
                    text: "Spend Rs-1,800 on new clothes and save Rs-200",
                    feedback: "While it's great that you're saving something, spending 90% of your paycheck leaves you vulnerable to unexpected expenses. A better approach would be to follow the 50/30/20 rule: 50% needs, 30% wants, 20% savings.",
                    score: 20,
                    coins: 50
                },
                {
                    text: "Save Rs-400, spend Rs-1,200 on rent and bills, and use Rs-400 for entertainment",
                    feedback: "Good job! You're covering your needs first, saving a reasonable amount, and still allowing yourself some fun money. This balanced approach is sustainable long-term.",
                    score: 50,
                    coins: 100
                },
                {
                    text: "Save the entire Rs-2,000 and don't spend anything",
                    feedback: "While saving is important, completely depriving yourself isn't sustainable. It's important to budget for both necessities and some discretionary spending to maintain quality of life.",
                    score: 30,
                    coins: 75
                }
            ]
        },
        {
            level: 2,
            title: "Emergency Fund",
            description: "Your car suddenly needs Rs-800 in repairs. You have Rs-1,200 in your emergency fund. What do you do?",
            options: [
                {
                    text: "Pay for the repairs from your emergency fund",
                    feedback: "Correct! This is exactly what emergency funds are for. After paying, focus on rebuilding your emergency fund.",
                    score: 60,
                    coins: 150
                },
                {
                    text: "Put the repairs on a credit card to preserve your emergency fund",
                    feedback: "Not ideal. While you're preserving your emergency fund, you'll likely pay interest on the credit card balance. It's better to use the emergency fund as intended.",
                    score: 30,
                    coins: 75
                },
                {
                    text: "Ignore the repairs and hope the problem goes away",
                    feedback: "This could lead to more expensive problems later. It's important to address necessary repairs promptly.",
                    score: 10,
                    coins: 25
                }
            ]
        },
        {
            level: 3,
            title: "Investing Decision",
            description: "You have Rs-5,000 to invest. A friend tells you about a 'hot stock tip' that could double your money quickly. What do you do?",
            options: [
                {
                    text: "Invest all Rs-5,000 in the hot stock tip",
                    feedback: "Risky! While you might get lucky, this is essentially gambling. Most 'hot tips' don't pan out as expected.",
                    score: 20,
                    coins: 50
                },
                {
                    text: "Invest in a diversified portfolio of index funds",
                    feedback: "Smart choice! Diversification reduces risk and index funds have historically provided solid returns over time.",
                    score: 70,
                    coins: 175
                },
                {
                    text: "Keep the money in a savings account to avoid any risk",
                    feedback: "While safe, savings accounts typically don't keep up with inflation. Consider at least some conservative investments for better long-term growth.",
                    score: 40,
                    coins: 100
                }
            ]
        },
        {
            level: 4,
            title: "Debt Management",
            description: "You have Rs-3,000 in credit card debt at 18% interest and Rs-10,000 in student loans at 5% interest. You have Rs-500 extra each month. How do you allocate it?",
            options: [
                {
                    text: "Pay Rs-300 to credit cards and Rs-200 to student loans",
                    feedback: "Not the most efficient. The credit card debt has a much higher interest rate, so you should prioritize paying that off first.",
                    score: 30,
                    coins: 75
                },
                {
                    text: "Pay the minimum on student loans and put all Rs-500 toward credit cards",
                    feedback: "Excellent strategy! This is the 'avalanche method' - paying off high-interest debt first to save the most money long-term.",
                    score: 80,
                    coins: 200
                },
                {
                    text: "Split the RS-500 equally between both debts",
                    feedback: "Better than option 1, but still not optimal. The credit card interest is costing you more, so it should get more attention.",
                    score: 50,
                    coins: 125
                }
            ]
        },
        {
            level: 5,
            title: "Retirement Planning",
            description: "Your employer offers a 401(k) match of 50% up to 6% of your salary. You make Rs-50,000/year. What's your best move?",
            options: [
                {
                    text: "Don't contribute to the 401(k) - you need all your paycheck now",
                    feedback: "You're leaving free money on the table! The employer match is essentially a 50% return on your investment immediately.",
                    score: 10,
                    coins: 25
                },
                {
                    text: "Contribute 6% (Rs-3,000/year) to get the full employer match",
                    feedback: "Perfect! You're maximizing the employer match, which is an instant 50% return on that portion of your investment.",
                    score: 90,
                    coins: 225
                },
                {
                    text: "Contribute 3% (Rs-1,500/year) to get some matching",
                    feedback: "Better than nothing, but you're still leaving some free money from your employer unmatched.",
                    score: 60,
                    coins: 150
                }
            ]
        }
    ],
    achievements: [
        {
            id: 1,
            title: "First Steps",
            description: "Complete your first financial scenario",
            icon: "fas fa-award",
            unlocked: false
        },
        {
            id: 2,
            title: "Budget Master",
            description: "Complete all budgeting scenarios with perfect scores",
            icon: "fas fa-chart-pie",
            unlocked: false
        },
        {
            id: 3,
            title: "Debt Destroyer",
            description: "Make optimal debt repayment decisions in all scenarios",
            icon: "fas fa-money-bill-wave",
            unlocked: false
        },
        {
            id: 4,
            title: "Investment Guru",
            description: "Score perfectly on all investment-related scenarios",
            icon: "fas fa-chart-line",
            unlocked: false
        },
        {
            id: 5,
            title: "Financial Champion",
            description: "Complete all levels of the game",
            icon: "fas fa-trophy",
            unlocked: false
        },
        {
            id: 6,
            title: "High Scorer",
            description: "Reach a total score of 300 points",
            icon: "fas fa-star",
            unlocked: false
        }
    ]
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Show random quote and transition to main content
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quote-text').textContent = `"${quote.text}"`;
    document.getElementById('quote-author').textContent = `- ${quote.author}`;
    
    setTimeout(() => {
        document.getElementById('quoteLanding').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('quoteLanding').style.display = 'none';
            document.getElementById('mainContent').style.display = 'block';
            initApp();
        }, 1000);
    }, 3000);
});

function initApp() {
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Set initial theme based on preference or localStorage
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-theme');
        themeToggle.checked = true;
    }
    
    // Theme toggle event
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Navigation
    document.querySelectorAll('[data-section]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // Show dashboard by default
    showSection('dashboard');
    
    // Initialize charts
    initCharts();
    
    // Form handling
    setupForms();
    
    // Modal handling
    setupModals();
    
    // Initialize game
    initGame();
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.dashboard').forEach(section => {
        section.classList.remove('active-section');
    });
    
    // Show selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active-section');
    }
}

function initCharts() {
    // Reports Charts
    const monthlyReportCtx = document.getElementById('monthlyReportChart').getContext('2d');
    new Chart(monthlyReportCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Monthly Spending',
                data: [1800, 2000, 2200, 2100, 2300, 2400],
                borderColor: '#4361ee',
                backgroundColor: 'rgba(67, 97, 238, 0.1)',
                fill: true
            }]
        }
    });

    const categoryReportCtx = document.getElementById('categoryReportChart').getContext('2d');
    new Chart(categoryReportCtx, {
        type: 'pie',
        data: {
            labels: ['Housing', 'Food', 'Transport', 'Entertainment', 'Utilities'],
            datasets: [{
                data: [35, 25, 15, 15, 10],
                backgroundColor: [
                    '#4361ee',
                    '#4cc9f0',
                    '#4895ef',
                    '#3f37c9',
                    '#f72585'
                ]
            }]
        }
    });

    const incomeExpenseCtx = document.getElementById('incomeExpenseChart').getContext('2d');
    new Chart(incomeExpenseCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Income',
                    data: [2500, 2700, 3000, 2800, 2900, 3100],
                    backgroundColor: '#4cc9f0'
                },
                {
                    label: 'Expenses',
                    data: [1800, 2000, 2200, 2100, 2300, 2400],
                    backgroundColor: '#f72585'
                }
            ]
        }
    });

    const savingsCtx = document.getElementById('savingsChart').getContext('2d');
    new Chart(savingsCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Savings',
                data: [700, 700, 800, 700, 600, 700],
                borderColor: '#4895ef',
                backgroundColor: 'rgba(72, 149, 239, 0.1)',
                fill: true
            }]
        }
    });
}

function setupForms() {
    // Expense Form
    document.getElementById('expenseForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('expenseName').value;
        const amount = parseFloat(document.getElementById('expenseAmount').value);
        const category = document.getElementById('expenseCategory').value;
        const date = document.getElementById('expenseDate').value;
        
        // In a real app, you would save this data
        console.log('New expense:', { name, amount, category, date });
        
        // Add to UI
        addExpenseToUI({ name, amount, category, date });
        
        // Reset form
        this.reset();
        
        // Show success message
        alert(`Expense "${name}" for $${amount.toFixed(2)} added successfully!`);
    });
    
    // Budget Form
    document.getElementById('budgetForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('budgetName').value;
        const amount = parseFloat(document.getElementById('budgetAmount').value);
        const category = document.getElementById('budgetCategory').value;
        
        // In a real app, you would save this data
        console.log('New budget:', { name, amount, category });
        
        // Add to UI
        addBudgetToUI({ name, amount, category });
        
        // Reset form
        this.reset();
        
        // Show success message
        alert(`Budget "${name}" for $${amount.toFixed(2)} created successfully!`);
    });
}

function addExpenseToUI(expense) {
    const expensesList = document.getElementById('expensesList');
    const expenseItem = document.createElement('div');
    expenseItem.className = 'expense-item';
    
    const isIncome = expense.amount >= 0;
    const amountClass = isIncome ? 'income-amount' : 'expense-amount';
    const amountSign = isIncome ? '+' : '-';
    
    expenseItem.innerHTML = `
        <div class="expense-info">
            <h3>${expense.name}</h3>
            <p>${expense.category} • ${new Date(expense.date).toLocaleDateString()}</p>
        </div>
        <div class="expense-amount ${amountClass}">${amountSign}$${Math.abs(expense.amount).toFixed(2)}</div>
        <div class="expense-actions">
            <button title="Edit"><i class="fas fa-edit"></i></button>
            <button title="Delete"><i class="fas fa-trash"></i></button>
        </div>
    `;
    
    expensesList.prepend(expenseItem);
}

function addBudgetToUI(budget) {
    const budgetsList = document.getElementById('budgetsList');
    const budgetItem = document.createElement('div');
    budgetItem.className = 'budget-item';
    
    budgetItem.innerHTML = `
        <div class="budget-info">
            <h3>${budget.name}</h3>
            <p>$0 of $${budget.amount.toFixed(2)}</p>
            <div class="budget-progress">
                <div class="budget-progress-bar" style="width: 0%"></div>
            </div>
        </div>
        <div class="budget-actions">
            <button title="Edit"><i class="fas fa-edit"></i></button>
            <button title="Delete"><i class="fas fa-trash"></i></button>
        </div>
    `;
    
    budgetsList.prepend(budgetItem);
}

function setupModals() {
    // Login/Signup buttons
    document.querySelector('.login-btn')?.addEventListener('click', () => {
        document.getElementById('loginModal').style.display = 'block';
    });
    
    document.querySelector('.signup-btn')?.addEventListener('click', () => {
        document.getElementById('signupModal').style.display = 'block';
    });
    
    // Close buttons
    document.querySelectorAll('.close').forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    // Close when clicking outside modal
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
    
    // Login form
    document.getElementById('loginForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // In a real app, you would validate and authenticate
        console.log('Login attempt:', { email, password });
        alert('Login successful! (Demo)');
        this.reset();
        document.getElementById('loginModal').style.display = 'none';
    });
    
    // Signup form
    document.getElementById('signupForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        // In a real app, you would create a new user
        console.log('Signup attempt:', { name, email, password });
        alert('Account created successfully! (Demo)');
        this.reset();
        document.getElementById('signupModal').style.display = 'none';
    });
}

// Game Functions
function initGame() {
    // Load game state from localStorage
    const savedGame = localStorage.getItem('financeGame');
    if (savedGame) {
        const parsedGame = JSON.parse(savedGame);
        gameData.currentLevel = parsedGame.currentLevel || 1;
        gameData.score = parsedGame.score || 0;
        gameData.coins = parsedGame.coins || 1000;
        gameData.progress = parsedGame.progress || 0;
        gameData.completedLevels = parsedGame.completedLevels || 0;
        gameData.unlockedAchievements = parsedGame.unlockedAchievements || [];
    }
    
    updateGameUI();
    renderAchievements();
    
    // Start game button
    document.querySelector('.start-game-btn')?.addEventListener('click', startGame);
}

function updateGameUI() {
    document.getElementById('gameLevel').textContent = gameData.currentLevel;
    document.getElementById('gameScore').textContent = gameData.score;
    document.getElementById('gameCoins').textContent = gameData.coins;
    
    const progressPercent = Math.min(100, Math.floor((gameData.completedLevels / 5) * 100));
    document.getElementById('progressPercent').textContent = progressPercent;
    document.querySelector('.progress-fill').style.width = `${progressPercent}%`;
    
    // Save game state
    localStorage.setItem('financeGame', JSON.stringify({
        currentLevel: gameData.currentLevel,
        score: gameData.score,
        coins: gameData.coins,
        progress: gameData.progress,
        completedLevels: gameData.completedLevels,
        unlockedAchievements: gameData.unlockedAchievements
    }));
}

function startGame() {
    const currentScenario = gameData.scenarios.find(s => s.level === gameData.currentLevel);
    
    if (!currentScenario) {
        // All levels completed
        showLevelComplete(true);
        return;
    }
    
    const gameContent = document.getElementById('gameContent');
    gameContent.innerHTML = `
        <div class="scenario-container">
            <h3>${currentScenario.title}</h3>
            <p class="scenario-text">${currentScenario.description}</p>
            
            <div class="options-container">
                ${currentScenario.options.map((option, index) => `
                    <button class="option-btn" data-index="${index}">${option.text}</button>
                `).join('')}
            </div>
        </div>
    `;
    
    // Add event listeners to options
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const optionIndex = parseInt(this.getAttribute('data-index'));
            selectOption(optionIndex);
        });
    });
}

function selectOption(optionIndex) {
    const currentScenario = gameData.scenarios.find(s => s.level === gameData.currentLevel);
    const selectedOption = currentScenario.options[optionIndex];
    
    // Update game state
    gameData.score += selectedOption.score;
    gameData.coins += selectedOption.coins;
    
    // Show feedback
    const gameContent = document.getElementById('gameContent');
    const scenarioContainer = gameContent.querySelector('.scenario-container');
    
    scenarioContainer.innerHTML += `
        <div class="feedback-container">
            <div class="feedback-title">Feedback:</div>
            <div class="feedback-text">${selectedOption.feedback}</div>
            <button class="next-btn">Continue</button>
        </div>
    `;
    
    document.querySelector('.next-btn').addEventListener('click', () => {
        gameData.completedLevels++;
        gameData.currentLevel++;
        updateGameUI();
        checkAchievements();
        
        if (gameData.currentLevel <= gameData.scenarios.length) {
            startGame();
        } else {
            showLevelComplete(true);
        }
    });
    
    updateGameUI();
}

function showLevelComplete(allCompleted) {
    const gameContent = document.getElementById('gameContent');
    
    if (allCompleted) {
        gameContent.innerHTML = `
            <div class="level-complete">
                <h3>Congratulations!</h3>
                <p>You've completed all levels of Financial Adventure!</p>
                <div class="reward-container">
                    <div class="reward">
                        <div class="reward-amount">+500</div>
                        <div class="reward-label">Coins</div>
                    </div>
                    <div class="reward">
                        <div class="reward-amount">+100</div>
                        <div class="reward-label">Points</div>
                    </div>
                </div>
                <p>You've unlocked all financial scenarios and demonstrated strong financial knowledge.</p>
                <button class="start-game-btn">Play Again</button>
            </div>
        `;
        
        gameData.coins += 500;
        gameData.score += 100;
        gameData.currentLevel = 1;
    } else {
        gameContent.innerHTML = `
            <div class="level-complete">
                <h3>Level Complete!</h3>
                <p>You've completed level ${gameData.currentLevel - 1} of Financial Adventure!</p>
                <div class="reward-container">
                    <div class="reward">
                        <div class="reward-amount">+100</div>
                        <div class="reward-label">Coins</div>
                    </div>
                    <div class="reward">
                        <div class="reward-amount">+20</div>
                        <div class="reward-label">Points</div>
                    </div>
                </div>
                <button class="start-game-btn">Continue to Next Level</button>
            </div>
        `;
        
        gameData.coins += 100;
        gameData.score += 20;
    }
    
    document.querySelector('.start-game-btn').addEventListener('click', startGame);
    updateGameUI();
}

function renderAchievements() {
    const achievementsList = document.getElementById('achievementsList');
    achievementsList.innerHTML = '';
    
    gameData.achievements.forEach(achievement => {
        const isUnlocked = gameData.unlockedAchievements.includes(achievement.id);
        
        const achievementCard = document.createElement('div');
        achievementCard.className = `achievement-card ${isUnlocked ? '' : 'achievement-locked'}`;
        achievementCard.innerHTML = `
            <div class="achievement-icon">
                <i class="${achievement.icon}"></i>
            </div>
            <div class="achievement-info">
                <h4>${achievement.title}</h4>
                <p>${achievement.description}</p>
            </div>
        `;
        
        achievementsList.appendChild(achievementCard);
    });
}

function checkAchievements() {
    // Check for First Steps achievement
    if (gameData.completedLevels >= 1 && !gameData.unlockedAchievements.includes(1)) {
        gameData.unlockedAchievements.push(1);
        showAchievementUnlocked(1);
    }
    
    // Check for High Scorer achievement
    if (gameData.score >= 300 && !gameData.unlockedAchievements.includes(6)) {
        gameData.unlockedAchievements.push(6);
        showAchievementUnlocked(6);
    }
    
    // Check for Financial Champion achievement
    if (gameData.completedLevels >= gameData.scenarios.length && !gameData.unlockedAchievements.includes(5)) {
        gameData.unlockedAchievements.push(5);
        showAchievementUnlocked(5);
    }
    
    updateGameUI();
    renderAchievements();
}

function showAchievementUnlocked(achievementId) {
    const achievement = gameData.achievements.find(a => a.id === achievementId);
    
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <div class="achievement-icon">
            <i class="${achievement.icon}"></i>
        </div>
        <div class="achievement-info">
            <h4>Achievement Unlocked!</h4>
            <p>${achievement.title}</p>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}