const { profilePrompts } = require('./promptTemplates.js');

const languageNames = {
    'en': 'English',
    'zh': 'Chinese',
    'ja': 'Japanese'
};

function buildSystemPrompt(promptParts, customPrompt = '', googleSearchEnabled = true, language = 'en') {
    const sections = [promptParts.intro, '\n\n', promptParts.formatRequirements];

    if (googleSearchEnabled) {
        sections.push('\n\n', promptParts.searchUsage);
    }

    sections.push('\n\n', promptParts.content, '\n\nUser-provided context\n-----\n', customPrompt, '\n-----\n\n', promptParts.outputInstructions);

    // Join all sections and replace language placeholder
    let prompt = sections.join('');
    const languageName = languageNames[language] || languageNames['en'];
    prompt = prompt.replace(/{{LANGUAGE}}/g, languageName);

    return prompt;
}

function getSystemPrompt(profile, customPrompt = '', googleSearchEnabled = true, language = 'en') {
    const promptParts = profilePrompts[profile] || profilePrompts.interview;
    return buildSystemPrompt(promptParts, customPrompt, googleSearchEnabled, language);
}

module.exports = {
    getSystemPrompt,
};
