class DecisionMaker {
    constructor() {
        this.options = [];
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        const optionInput = document.getElementById('optionInput');
        const addBtn = document.getElementById('addBtn');
        const decideBtn = document.getElementById('decideBtn');
        const clearAllBtn = document.getElementById('clearAllBtn');

        addBtn.addEventListener('click', () => this.addOption());
        optionInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addOption();
        });
        decideBtn.addEventListener('click', () => this.makeDecision());
        clearAllBtn.addEventListener('click', () => this.clearAll());
    }

    addOption() {
        const input = document.getElementById('optionInput');
        const option = input.value.trim();
        
        if (option && !this.options.includes(option)) {
            this.options.push(option);
            this.updateDisplay();
            input.value = '';
        }
    }

    removeOption(option) {
        this.options = this.options.filter(opt => opt !== option);
        this.updateDisplay();
    }

    updateDisplay() {
        const optionsList = document.getElementById('optionsList');
        const decideBtn = document.getElementById('decideBtn');
        const clearAllBtn = document.getElementById('clearAllBtn');
        
        optionsList.innerHTML = '';
        
        this.options.forEach(option => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="option-text">${option}</span>
                <button class="remove-btn" onclick="app.removeOption('${option}')">×</button>
            `;
            optionsList.appendChild(li);
        });

        decideBtn.disabled = this.options.length < 2;
        clearAllBtn.style.display = this.options.length > 0 ? 'block' : 'none';
    }

    makeDecision() {
        if (this.options.length === 0) return;
        
        const randomIndex = Math.floor(Math.random() * this.options.length);
        const selectedOption = this.options[randomIndex];
        
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <div class="decision-result">
                <h3>The decision is:</h3>
                <div class="selected-option">${selectedOption}</div>
            </div>
        `;
        
        resultDiv.classList.add('show-result');
    }

    clearAll() {
        this.options = [];
        this.updateDisplay();
        document.getElementById('result').innerHTML = '';
    }
}

const app = new DecisionMaker();