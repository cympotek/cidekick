// Debug helper for Listen feature
// This file helps diagnose issues with the Listen feature

// To use this debug helper:
// 1. Start the app
// 2. Open DevTools console
// 3. Run: require('./src/features/listen/debug-listen.js').diagnose()

const diagnose = async () => {
    console.log('=== Listen Feature Diagnosis ===');
    
    // Check if we're in renderer process
    if (window.require) {
        const { ipcRenderer } = window.require('electron');
        
        // Check API key
        const apiKey = localStorage.getItem('openai_api_key');
        console.log('1. API Key stored:', apiKey ? `Yes (${apiKey.length} chars)` : 'No');
        
        // Check provider
        const provider = await ipcRenderer.invoke('get-ai-provider');
        console.log('2. AI Provider:', provider);
        
        // Check if session is active
        const isActive = await ipcRenderer.invoke('is-session-active');
        console.log('3. Session active:', isActive);
        
        // Try to initialize session
        console.log('4. Attempting to initialize session...');
        try {
            const success = await ipcRenderer.invoke('initialize-openai', 'interview', 'en');
            console.log('   Session initialization:', success ? 'Success' : 'Failed');
        } catch (error) {
            console.error('   Session initialization error:', error);
        }
        
        // Check if startCapture is available
        if (window.cidekick) {
            console.log('5. Window.cidekick available:', true);
            console.log('   - startCapture:', typeof window.cidekick.startCapture);
            console.log('   - initializeopenai:', typeof window.cidekick.initializeopenai);
            
            // Try to start capture
            console.log('6. Attempting to start capture...');
            try {
                await window.cidekick.initializeopenai('interview', 'en');
                console.log('   OpenAI initialized');
                
                await window.cidekick.startCapture(5, 'medium');
                console.log('   Capture started');
            } catch (error) {
                console.error('   Capture start error:', error);
            }
        } else {
            console.log('5. Window.cidekick NOT available');
        }
        
        // Listen for transcription updates
        console.log('7. Setting up transcription listener...');
        ipcRenderer.on('stt-update', (event, data) => {
            console.log('   Transcription received:', data);
        });
        
        console.log('\n=== Diagnosis Complete ===');
        console.log('Check the console output above for any errors or missing components.');
        console.log('If transcriptions are not appearing, check:');
        console.log('- Is the API key valid for the selected provider?');
        console.log('- Are there any WebSocket connection errors?');
        console.log('- Is audio being captured from the microphone?');
    } else {
        console.error('Not in Electron renderer process');
    }
};

module.exports = { diagnose };