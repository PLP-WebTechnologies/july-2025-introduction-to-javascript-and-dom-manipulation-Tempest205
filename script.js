// ========================================
// JAVASCRIPT MASTERY PROJECT
// Demonstrating variables, functions, loops and DOM manipulation
// ========================================

// ========================================
// PART 1: JAVASCRIPT BASICS
// Variables, Data Types, Operators and Conditionals
// ========================================

// Global variables demonstration
let userName = "";
let userAge = 0;
let favoriteColor = "";
const currentYear = new Date().getFullYear();

/**
 * Function to process user information using conditionals
 * Demonstrates variables, data types, operators and if/else logic
 */
function processUserInfo() {
    // Get values from DOM elements
    userName = document.getElementById('userName').value.trim();
    userAge = parseInt(document.getElementById('userAge').value);
    favoriteColor = document.getElementById('favoriteColor').value;
    
    // Input validation using conditionals
    if (!userName) {
        document.getElementById('userInfoOutput').textContent = 
            "❌ Please enter your name!";
        return;
    }
    
    if (isNaN(userAge) || userAge <= 0) {
        document.getElementById('userInfoOutput').textContent = 
            "❌ Please enter a valid age!";
        return;
    }
    
    if (!favoriteColor) {
        document.getElementById('userInfoOutput').textContent = 
            "❌ Please select your favorite color!";
        return;
    }
    
    // Mathematical operations
    const birthYear = currentYear - userAge;
    
    // Conditional logic for age categories
    let ageCategory;
    let lifeStage;
    
    if (userAge < 13) {
        ageCategory = "child";
        lifeStage = "enjoying childhood adventures";
    } else if (userAge < 20) {
        ageCategory = "teenager";
        lifeStage = "navigating the exciting teenage years";
    } else if (userAge < 60) {
        ageCategory = "adult";
        lifeStage = "living life to the fullest";
    } else {
        ageCategory = "senior";
        lifeStage = "sharing wisdom from years of experience";
    }
    
    // String concatenation and template literals
    const personalizedMessage = `
🎉 Hello ${userName}!

📊 Your Information:
• Name: ${userName}
• Age: ${userAge} years old
• Born in: ${birthYear}
• Category: ${ageCategory}
• Favorite Color: ${favoriteColor}
• Life Stage: You're ${lifeStage}!

${favoriteColor === 'blue' ? '🌊 Great choice! Blue represents calmness and wisdom.' :
  favoriteColor === 'red' ? '❤️ Awesome! Red represents passion and energy.' :
  favoriteColor === 'green' ? '🌿 Nice! Green represents growth and harmony.' :
  favoriteColor === 'purple' ? '💜 Excellent! Purple represents creativity and mystery.' :
  favoriteColor === 'orange' ? '🧡 Wonderful! Orange represents enthusiasm and warmth.' :
  '🎨 Beautiful color choice!'}

⚡ This demonstrates JavaScript variables, conditionals, and string manipulation!
    `;
    
    document.getElementById('userInfoOutput').textContent = personalizedMessage;
    console.log("User info processed:", {userName, userAge, favoriteColor, birthYear});
}

// ========================================
// PART 2: JAVASCRIPT FUNCTIONS
// Reusable blocks of code with parameters and return values
// ========================================

/**
 * Function 1: Calculator with multiple operations
 * Demonstrates parameter passing, return values and error handling
 */
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    
    // Input validation
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('calculatorOutput').textContent = 
            "❌ Please enter valid numbers!";
        return;
    }
    
    let result;
    let operatorSymbol;
    
    // Switch statement (alternative to if/else)
    switch(operation) {
        case 'add':
            result = add(num1, num2);
            operatorSymbol = '+';
            break;
        case 'subtract':
            result = subtract(num1, num2);
            operatorSymbol = '-';
            break;
        case 'multiply':
            result = multiply(num1, num2);
            operatorSymbol = '×';
            break;
        case 'divide':
            if (num2 === 0) {
                document.getElementById('calculatorOutput').textContent = 
                    "❌ Cannot divide by zero!";
                return;
            }
            result = divide(num1, num2);
            operatorSymbol = '÷';
            break;
        default:
            document.getElementById('calculatorOutput').textContent = 
                "❌ Invalid operation!";
            return;
    }
    
    const output = `
🧮 Calculation Result:
${num1} ${operatorSymbol} ${num2} = ${result}

📈 Additional Info:
• Result type: ${typeof result}
• Is positive: ${result > 0 ? 'Yes' : 'No'}
• Rounded: ${Math.round(result)}
• Scientific notation: ${result.toExponential(2)}
    `;
    
    document.getElementById('calculatorOutput').textContent = output;
    console.log("Calculation performed:", {num1, num2, operation, result});
}

// Helper functions for calculator (demonstrates function modularity)
function add(a, b) { 
    return a + b; 
}

function subtract(a, b) { 
    return a - b; 
}

function multiply(a, b) { 
    return a * b; 
}

function divide(a, b) { 
    return a / b; 
}

/**
 * Function 2: Text formatting with multiple options
 * Demonstrates string manipulation and function parameters
 */
function formatText(formatType) {
    const inputText = document.getElementById('textInput').value;
    
    if (!inputText.trim()) {
        document.getElementById('textOutput').textContent = 
            "❌ Please enter some text to format!";
        return;
    }
    
    let formattedText;
    let description;
    
    switch(formatType) {
        case 'uppercase':
            formattedText = inputText.toUpperCase();
            description = "Converted to UPPERCASE";
            break;
        case 'lowercase':
            formattedText = inputText.toLowerCase();
            description = "Converted to lowercase";
            break;
        case 'capitalize':
            formattedText = capitalizeWords(inputText);
            description = "Capitalized Each Word";
            break;
        case 'reverse':
            formattedText = inputText.split('').reverse().join('');
            description = "Reversed the text";
            break;
        default:
            formattedText = inputText;
            description = "No formatting applied";
    }
    
    const output = `
📝 Text Formatting Result:

Original: "${inputText}"
Formatted: "${formattedText}"
Action: ${description}

📊 Text Statistics:
• Character count: ${inputText.length}
• Word count: ${inputText.trim().split(/\s+/).length}
• Has numbers: ${/\d/.test(inputText) ? 'Yes' : 'No'}
• Has special characters: ${/[^a-zA-Z0-9\s]/.test(inputText) ? 'Yes' : 'No'}
    `;
    
    document.getElementById('textOutput').textContent = output;
}

// Helper function to capitalize each word
function capitalizeWords(str) {
    return str.replace(/\w\S*/g, (txt) => 
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
}

// ========================================
// PART 3: JAVASCRIPT LOOPS
// For, While, and ForEach loops for repetitive tasks
// ========================================

/**
 * Loop Example 1: Pattern generation using nested for loops
 */
function generatePattern() {
    const size = parseInt(document.getElementById('patternSize').value);
    
    if (isNaN(size) || size < 1 || size > 10) {
        document.getElementById('patternOutput').textContent = 
            "❌ Please enter a valid size (1-10)!";
        return;
    }
    
    let pattern = "🔢 Number Patterns:\n\n";
    
    // Pattern 1: Number triangle using nested for loops
    pattern += "1. Number Triangle:\n";
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= i; j++) {
            pattern += j + " ";
        }
        pattern += "\n";
    }
    
    pattern += "\n2. Star Pyramid:\n";
    // Pattern 2: Star pyramid using nested for loops
    for (let i = 1; i <= size; i++) {
        // Add spaces for centering
        for (let j = 1; j <= size - i; j++) {
            pattern += " ";
        }
        // Add stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            pattern += "*";
        }
        pattern += "\n";
    }
    
    pattern += "\n3. Multiplication Table:\n";
    // Pattern 3: Multiplication table using nested for loops
    for (let i = 1; i <= size; i++) {
        let row = "";
        for (let j = 1; j <= size; j++) {
            row += (i * j).toString().padStart(3) + " ";
        }
        pattern += row + "\n";
    }
    
    document.getElementById('patternOutput').textContent = pattern;
    console.log("Pattern generated with size:", size);
}

/**
 * Loop Example 2: Countdown timer using setInterval
 * Demonstrates while loop concept with timer
 */
let countdownInterval;

function startCountdown() {
    const startValue = parseInt(document.getElementById('countdownInput').value);
    
    if (isNaN(startValue) || startValue < 1) {
        document.getElementById('countdownDisplay').textContent = 
            "❌ Please enter a valid number!";
        return;
    }
    
    // Clear any existing countdown
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
    
    let currentCount = startValue;
    const display = document.getElementById('countdownDisplay');
    
    // Update display immediately
    display.textContent = currentCount;
    display.style.color = '#667eea';
    
    // Using setInterval (similar to while loop with timer)
    countdownInterval = setInterval(() => {
        currentCount--;
        
        if (currentCount > 0) {
            display.textContent = currentCount;
            // Change color as countdown progresses
            if (currentCount <= 3) {
                display.style.color = '#e53e3e';
            } else if (currentCount <= 5) {
                display.style.color = '#d69e2e';
            }
        } else {
            display.textContent = "🎉 Time's Up!";
            display.style.color = '#38a169';
            clearInterval(countdownInterval);
            countdownInterval = null;
        }
    }, 1000);
    
    console.log("Countdown started from:", startValue);
}

function stopCountdown() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
        document.getElementById('countdownDisplay').textContent = "⏹️ Stopped";
        document.getElementById('countdownDisplay').style.color = '#667eea';
    }
}

/**
 * Loop Example 3: Dynamic list generation using forEach and array methods
 */
function generateList() {
    const input = document.getElementById('listItems').value.trim();
    
    if (!input) {
        document.getElementById('dynamicList').textContent = 
            "❌ Please enter some items!";
        return;
    }
    
    // Split input into array and clean up using array methods
    const items = input.split(',').map(item => item.trim()).filter(item => item);
    
    if (items.length === 0) {
        document.getElementById('dynamicList').textContent = 
            "❌ No valid items found!";
        return;
    }
    
    let output = `📋 Generated List (${items.length} items):\n\n`;
    
    // Using forEach loop
    output += "🔸 Ordered List (forEach loop):\n";
    items.forEach((item, index) => {
        output += `${index + 1}. ${item}\n`;
    });
    
    output += "\n🔸 Bullet List (for...of loop):\n";
    // Using for...of loop
    for (const item of items) {
        output += `• ${item}\n`;
    }
    
    // Using traditional for loop with array methods
    output += "\n🔸 Processed List (traditional for loop):\n";
    for (let i = 0; i < items.length; i++) {
        const processedItem = items[i].charAt(0).toUpperCase() + items[i].slice(1).toLowerCase();
        output += `${i + 1}. ${processedItem} (${items[i].length} chars)\n`;
    }
    
    // Array statistics using various loop methods
    const totalChars = items.reduce((sum, item) => sum + item.length, 0);
    const longestItem = items.reduce((longest, current) => 
        current.length > longest.length ? current : longest, "");
    
    output += `\n📊 Statistics:
• Total items: ${items.length}
• Total characters: ${totalChars}
• Average length: ${(totalChars / items.length).toFixed(1)}
• Longest item: "${longestItem}" (${longestItem.length} chars)`;
    
    document.getElementById('dynamicList').textContent = output;
    console.log("List generated:", items);
}

// ========================================
// PART 4: DOM MANIPULATION
// Selecting elements, event handling and dynamic content
// ========================================

// Task management array to demonstrate DOM manipulation
let tasks = [];
let taskIdCounter = 0;

/**
 * DOM Interaction 1: Dynamic task management
 * Demonstrates createElement, appendChild, event handling
 */
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (!taskText) {
        alert('Please enter a task!');
        return;
    }
    
    // Create task object
    const task = {
        id: ++taskIdCounter,
        text: taskText,
        completed: false,
        createdAt: new Date().toLocaleTimeString()
    };
    
    tasks.push(task);
    taskInput.value = ''; // Clear input
    renderTasks();
    
    console.log("Task added:", task);
}

/**
 * Render tasks to DOM (demonstrates createElement, appendChild, etc.)
 */
function renderTasks() {
    const taskList = document.getElementById('taskList');
    
    // Clear existing tasks
    taskList.innerHTML = '';
    
    if (tasks.length === 0) {
        taskList.innerHTML = '<p>No tasks yet. Add one above!</p>';
        return;
    }
    
    // Create task elements dynamically
    tasks.forEach(task => {
        // Create main task container
        const taskElement = document.createElement('div');
        taskElement.className = `task-item ${task.completed ? 'completed' : ''}`;
        taskElement.setAttribute('data-task-id', task.id);
        
        // Create task content
        const taskContent = document.createElement('span');
        taskContent.textContent = `${task.text} (added at ${task.createdAt})`;
        
        // Create button container
        const buttonContainer = document.createElement('div');
        
        // Create complete button
        const completeBtn = document.createElement('button');
        completeBtn.textContent = task.completed ? 'Undo' : 'Complete';
        completeBtn.style.backgroundColor = task.completed ? '#38a169' : '#667eea';
        completeBtn.onclick = () => toggleTask(task.id);
        
        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.backgroundColor = '#e53e3e';
        deleteBtn.onclick = () => deleteTask(task.id);
        
        // Assemble elements
        buttonContainer.appendChild(completeBtn);
        buttonContainer.appendChild(deleteBtn);
        taskElement.appendChild(taskContent);
        taskElement.appendChild(buttonContainer);
        
        // Add to DOM with animation
        taskElement.classList.add('fade-in');
        taskList.appendChild(taskElement);
    });
    
    // Update task counter
    updateTaskStats();
}

/**
 * DOM Interaction 2: Event handling and class manipulation
 */
function toggleTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        renderTasks();
        
        // Add visual feedback
        const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
        if (taskElement) {
            taskElement.style.transform = 'scale(0.95)';
            setTimeout(() => {
                taskElement.style.transform = 'scale(1)';
            }, 150);
        }
    }
}

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}

function clearAllTasks() {
    if (tasks.length > 0 && confirm('Are you sure you want to delete all tasks?')) {
        tasks = [];
        renderTasks();
    }
}

function updateTaskStats() {
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    
    if (totalTasks > 0) {
        const statsElement = document.createElement('div');
        statsElement.style.marginTop = '15px';
        statsElement.style.padding = '10px';
        statsElement.style.background = '#e6fffa';
        statsElement.style.borderRadius = '5px';
        statsElement.style.textAlign = 'center';
        statsElement.innerHTML = `
            📊 Progress: ${completedTasks}/${totalTasks} completed 
            (${Math.round((completedTasks/totalTasks) * 100)}%)
        `;
        document.getElementById('taskList').appendChild(statsElement);
    }
}

/**
 * DOM Interaction 3: Theme toggling and style manipulation
 */
let isDarkTheme = false;

function toggleTheme() {
    const body = document.body;
    const container = document.querySelector('.container');
    const sections = document.querySelectorAll('.section');
    const outputs = document.querySelectorAll('.output');
    const taskList = document.querySelector('.task-list');
    const taskItems = document.querySelectorAll('.task-item');
    const countdown = document.querySelector('.countdown');
    
    if (!isDarkTheme) {
        // Apply dark theme
        body.classList.add('dark-theme');
        container.classList.add('dark-theme');
        sections.forEach(section => section.classList.add('dark-theme'));
        outputs.forEach(output => output.classList.add('dark-theme'));
        if (taskList) taskList.classList.add('dark-theme');
        taskItems.forEach(item => item.classList.add('dark-theme'));
        if (countdown) countdown.classList.add('dark-theme');
        
        isDarkTheme = true;
        console.log("Dark theme activated");
    } else {
        // Remove dark theme
        body.classList.remove('dark-theme');
        container.classList.remove('dark-theme');
        sections.forEach(section => section.classList.remove('dark-theme'));
        outputs.forEach(output => output.classList.remove('dark-theme'));
        if (taskList) taskList.classList.remove('dark-theme');
        taskItems.forEach(item => item.classList.remove('dark-theme'));
        if (countdown) countdown.classList.remove('dark-theme');
        
        isDarkTheme = false;
        console.log("Light theme activated");
    }
}

/**
 * DOM Interaction 4: Dynamic element creation and manipulation
 */
function addRandomElement() {
    const container = document.getElementById('dynamicContent');
    
    // Create a random element
    const element = document.createElement('div');
    const randomColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
    const randomColor = randomColors[Math.floor(Math.random() * randomColors.length)];
    
    // Style the element
    element.style.cssText = `
        background: ${randomColor};
        color: white;
        padding: 15px;
        margin: 10px;
        border-radius: 10px;
        display: inline-block;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    `;
    
    const randomTexts = [
        '🎉 Dynamic Element!',
        '✨ Created with JS!',
        '🚀 Interactive Content!',
        '💫 DOM Manipulation!',
        '🎨 Styled Dynamically!'
    ];
    
    element.textContent = randomTexts[Math.floor(Math.random() * randomTexts.length)];
    
    // Add click event to remove element
    element.addEventListener('click', function() {
        this.style.transform = 'scale(0)';
        setTimeout(() => {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        }, 300);
    });
    
    // Add hover effects
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
        this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    });
    
    // Add with animation
    element.style.transform = 'scale(0)';
    container.appendChild(element);
    
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 10);
    
    console.log("Random element added with color:", randomColor);
}

/**
 * DOM Interaction 5: Animation and class manipulation
 */
function animateElements() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach((section, index) => {
        setTimeout(() => {
            // Add animation class
            section.style.animation = 'pulse 0.6s ease-in-out';
            
            // Remove animation class after animation completes
            setTimeout(() => {
                section.style.animation = '';
            }, 600);
        }, index * 200);
    });
    
    console.log("Elements animated");
}

/**
 * DOM Interaction 6: Color changer with style manipulation
 */
let colorIndex = 0;
const colors = [
    '#667eea', '#764ba2', '#f093fb', '#f5576c',
    '#4facfe', '#00f2fe', '#43e97b', '#38f9d7',
    '#ffecd2', '#fcb69f', '#a8edea', '#fed6e3'
];

function changeColor() {
    const colorBox = document.getElementById('colorBox');
    colorIndex = (colorIndex + 1) % colors.length;
    
    // Change background color with animation
    colorBox.style.background = colors[colorIndex];
    colorBox.style.transform = 'scale(1.1) rotate(10deg)';
    
    // Reset transform after animation
    setTimeout(() => {
        colorBox.style.transform = 'scale(1) rotate(0deg)';
    }, 200);
    
    console.log("Color changed to:", colors[colorIndex]);
}

// ========================================
// EVENT LISTENERS AND INITIALIZATION
// ========================================

// Add event listener for Enter key on task input
document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput) {
        taskInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                addTask();
            }
        });
    }
    
    // Add event listener for Enter key on other inputs
    const userNameInput = document.getElementById('userName');
    if (userNameInput) {
        userNameInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                document.getElementById('userAge').focus();
            }
        });
    }
    
    const userAgeInput = document.getElementById('userAge');
    if (userAgeInput) {
        userAgeInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                document.getElementById('favoriteColor').focus();
            }
        });
    }
    
    console.log("JavaScript Mastery Project loaded successfully!");
    console.log("All functions and event listeners initialized.");
});