document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('file-input');
    const analyzeButton = document.getElementById('analyze-button');
    const previewSection = document.getElementById('preview-section');
    const imagePreview = document.getElementById('image-preview');
    const resultsSection = document.getElementById('results-section');
    const loader = document.getElementById('loader');
    const resultsContent = document.getElementById('results-content');
    const fileName = document.getElementById('file-name');
    const fileType = document.getElementById('file-type');
    const analysisText = document.getElementById('analysis-text');
    const promptInput = document.getElementById('prompt-input');
    const copyButton = document.getElementById('copy-button');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    // API URL
    const API_URL = 'https://image-recognition-production.up.railway.app/analyze';

    // Variables
    let selectedFile = null;

    // Event Listeners
    uploadArea.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleFileSelect);
    analyzeButton.addEventListener('click', analyzeImage);
    copyButton.addEventListener('click', copyAnalysisToClipboard);

    // Drag and Drop functionality
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('active');
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('active');
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('active');

        if (e.dataTransfer.files.length) {
            fileInput.files = e.dataTransfer.files;
            handleFileSelect(e);
        }
    });

    // Functions
    function handleFileSelect(e) {
        const files = e.target.files || e.dataTransfer.files;

        if (files.length === 0) return;

        selectedFile = files[0];

        // Check if file is an image
        if (!selectedFile.type.match('image.*')) {
            showToast('Please select an image file', 'error');
            return;
        }

        // Enable analyze button
        analyzeButton.disabled = false;

        // Show image preview
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.src = e.target.result;
            previewSection.style.display = 'block';

            // Scroll to preview section
            previewSection.scrollIntoView({ behavior: 'smooth' });
        };
        reader.readAsDataURL(selectedFile);
    }

    async function analyzeImage() {
        if (!selectedFile) return;

        // Show results section with loader
        resultsSection.style.display = 'block';
        loader.style.display = 'flex';
        resultsContent.style.display = 'none';

        // Scroll to results section
        resultsSection.scrollIntoView({ behavior: 'smooth' });

        // Create form data
        const formData = new FormData();
        formData.append('file', selectedFile);

        // Add custom prompt if provided
        if (promptInput.value.trim()) {
            formData.append('prompt', promptInput.value.trim());
        }

        try {
            // Send request to API
            const response = await fetch(API_URL, {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();

            // Update results
            fileName.textContent = data.filename;
            fileType.textContent = data.content_type;
            analysisText.textContent = data.analysis;

            // Hide loader and show results
            loader.style.display = 'none';
            resultsContent.style.display = 'block';

        } catch (error) {
            console.error('Error analyzing image:', error);
            showToast(`Error analyzing image: ${error.message}`, 'error');

            // Hide loader
            loader.style.display = 'none';
        }
    }

    function copyAnalysisToClipboard() {
        if (!analysisText.textContent) return;

        navigator.clipboard.writeText(analysisText.textContent)
            .then(() => {
                showToast('Analysis copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
                showToast('Failed to copy text', 'error');
            });
    }

    function showToast(message, type = 'success') {
        toastMessage.textContent = message;

        // Set toast type
        if (type === 'error') {
            toast.classList.add('error');
            toast.querySelector('i').className = 'fas fa-exclamation-circle';
        } else {
            toast.classList.remove('error');
            toast.querySelector('i').className = 'fas fa-check-circle';
        }

        // Show toast
        toast.classList.add('show');

        // Hide toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // Add animation classes on load
    document.querySelectorAll('section').forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
    });
});
