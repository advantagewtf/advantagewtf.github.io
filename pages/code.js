let pyodideReadyPromise = loadPyodide();

const languageSelect = document.getElementById('language');
const editor = document.getElementById('editor');
const highlighting = document.getElementById('highlighting').querySelector('code');
const outputCode = document.getElementById('output-code');
const fileInput = document.getElementById('fileInput');
const saveBtn = document.getElementById('saveBtn');
const themeSelect = document.getElementById('themeSelect');
const themeLink = document.getElementById('theme-link');
const fileList = document.getElementById('file-list');
const newFileBtn = document.getElementById('newFileBtn');
const deleteFileBtn = document.getElementById('deleteFileBtn');
const filenameInput = document.getElementById('filenameInput');

// LocalStorage keys
const LS_FILES = 'code-editor-files';
const LS_CURRENT = 'code-editor-current-file';
const LS_THEME = 'code-editor-theme';

// --- Theme Handling ---
const themes = {
    "prism-tomorrow": "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-tomorrow.min.css",
    "prism": "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism.min.css",
    "prism-okaidia": "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.min.css",
    "prism-coy": "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-coy.min.css",
    "prism-funky": "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-funky.min.css",
    "prism-solarizedlight": "https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-solarizedlight.min.css"
};

function setTheme(theme) {
    themeLink.href = themes[theme] || themes["prism-tomorrow"];
    localStorage.setItem(LS_THEME, theme);
}
themeSelect.addEventListener('change', () => setTheme(themeSelect.value));
if (localStorage.getItem(LS_THEME)) {
    themeSelect.value = localStorage.getItem(LS_THEME);
    setTheme(themeSelect.value);
}

// --- File Handling ---
function getFiles() {
    let files = localStorage.getItem(LS_FILES);
    return files ? JSON.parse(files) : {};
}
function saveFiles(files) {
    localStorage.setItem(LS_FILES, JSON.stringify(files));
}
function updateFileList() {
    fileList.innerHTML = '';
    const files = getFiles();
    Object.keys(files).forEach(fname => {
        const li = document.createElement('li');
        li.textContent = fname;
        li.style.cursor = 'pointer';
        if (fname === localStorage.getItem(LS_CURRENT)) li.style.fontWeight = 'bold';
        li.onclick = () => loadFile(fname);
        fileList.appendChild(li);
    });
}
function loadFile(fname) {
    const files = getFiles();
    if (files[fname] !== undefined) {
        editor.value = files[fname].content;
        languageSelect.value = files[fname].lang;
        localStorage.setItem(LS_CURRENT, fname);
        updateHighlighting();
        updateFileList();
    }
}
function saveCurrentFile() {
    let fname = localStorage.getItem(LS_CURRENT) || filenameInput.value || "untitled.txt";
    if (!fname.trim()) fname = "untitled.txt";
    const files = getFiles();
    files[fname] = {
        content: editor.value,
        lang: languageSelect.value
    };
    saveFiles(files);
    localStorage.setItem(LS_CURRENT, fname);
    updateFileList();
}
function newFile() {
    let fname = filenameInput.value.trim();
    if (!fname) fname = "untitled.txt";
    const files = getFiles();
    if (!files[fname]) {
        files[fname] = { content: "", lang: languageSelect.value };
        saveFiles(files);
        localStorage.setItem(LS_CURRENT, fname);
        editor.value = "";
        updateHighlighting();
        updateFileList();
    } else {
        loadFile(fname);
    }
}
function deleteFile() {
    let fname = localStorage.getItem(LS_CURRENT);
    if (!fname) return;
    const files = getFiles();
    delete files[fname];
    saveFiles(files);
    localStorage.removeItem(LS_CURRENT);
    editor.value = "";
    updateHighlighting();
    updateFileList();
}

// Load from localStorage
function loadFromStorage() {
    updateFileList();
    let files = getFiles();
    let current = localStorage.getItem(LS_CURRENT);
    if (current && files[current]) {
        editor.value = files[current].content;
        languageSelect.value = files[current].lang;
    } else if (Object.keys(files).length) {
        loadFile(Object.keys(files)[0]);
    }
    updateHighlighting();
    outputCode.className = 'language-' + languageSelect.value;
    highlighting.className = 'language-' + languageSelect.value;
}
loadFromStorage();

function updateHighlighting() {
    const lang = languageSelect.value;
    highlighting.className = 'language-' + lang;
    let code = editor.value.replace(/\t/g, '    ');
    code = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    highlighting.innerHTML = code.length ? code : '\u200b';
    Prism.highlightElement(highlighting);
    // Save current file
    saveCurrentFile();
}

languageSelect.addEventListener('change', function() {
    highlighting.className = 'language-' + this.value;
    outputCode.className = 'language-' + this.value;
    updateHighlighting();
    outputCode.textContent = '';
    Prism.highlightElement(outputCode);
    saveCurrentFile();
});

editor.addEventListener('input', function() {
    updateHighlighting();
});

editor.addEventListener('scroll', function() {
    document.getElementById('highlighting').scrollTop = editor.scrollTop;
    document.getElementById('highlighting').scrollLeft = editor.scrollLeft;
});

fileInput.addEventListener('change', function(e) {
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = function(evt) {
            let ext = file.name.split('.').pop();
            let lang = ext === "js" ? "javascript" : ext === "py" ? "python" : ext === "cpp" ? "cpp" : "javascript";
            let allFiles = getFiles();
            allFiles[file.name] = { content: evt.target.result, lang: lang };
            saveFiles(allFiles);
            localStorage.setItem(LS_CURRENT, file.name);
            loadFile(file.name);
        };
        reader.readAsText(file);
    }
});

saveBtn.addEventListener('click', function() {
    let fname = localStorage.getItem(LS_CURRENT) || filenameInput.value || "untitled.txt";
    if (!fname.trim()) fname = "untitled.txt";
    const blob = new Blob([editor.value], {type: "text/plain"});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = fname;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

newFileBtn.addEventListener('click', function() {
    newFile();
});
deleteFileBtn.addEventListener('click', function() {
    deleteFile();
});

// Initial highlighting
updateHighlighting();

document.getElementById('runBtn').onclick = async function runCode() {
    const lang = languageSelect.value;
    const code = editor.value;
    outputCode.className = 'language-' + lang;
    outputCode.textContent = '';
    if (lang === 'javascript') {
        try {
            let logs = [];
            const originalLog = console.log;
            console.log = function(...args) {
                logs.push(args.join(' '));
            };
            let result = eval(code);
            if (result !== undefined) logs.push(result);
            outputCode.textContent = logs.join('\n');
            Prism.highlightElement(outputCode);
            console.log = originalLog;
        } catch (e) {
            outputCode.textContent = e;
            Prism.highlightElement(outputCode);
        }
    } else if (lang === 'python') {
        outputCode.textContent = 'Running...';
        Prism.highlightElement(outputCode);
        try {
            let pyodide = await pyodideReadyPromise;
            let result = await pyodide.runPythonAsync(`
import sys
from io import StringIO
sys.stdout = sys.stderr = mystdout = StringIO()
try:
${code.split('\n').map(line => '    ' + line).join('\n')}
except Exception as e:
    import traceback
    traceback.print_exc()
mystdout.getvalue()
            `);
            outputCode.textContent = result;
            Prism.highlightElement(outputCode);
        } catch (e) {
            outputCode.textContent = e;
            Prism.highlightElement(outputCode);
        }
    } else if (lang === 'cpp') {
        outputCode.textContent = 'C++ execution is not supported in-browser. You can save and run this file locally.';
        Prism.highlightElement(outputCode);
    }
};