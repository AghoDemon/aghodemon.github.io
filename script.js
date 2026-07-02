        const terminalInput = document.getElementById('terminalInput');
        const terminalOutput = document.getElementById('terminalOutput');

        function addOutput(text, type = 'normal') {
            const line = document.createElement('div');
            if (type === 'highlight') {
                line.innerHTML = `<span class="highlight">> ${text}</span>`;
            } else if (type === 'dim') {
                line.innerHTML = `<span class="dim">> ${text}</span>`;
            } else {
                line.innerHTML = `<span class="dim">> </span>${text}`;
            }
            terminalOutput.appendChild(line);
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }

        terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const cmd = terminalInput.value.trim();
                terminalInput.value = '';

                if (cmd === '') return;

                addOutput(`$ ${cmd}`, 'dim');

                if (cmd === '/social') {
                    addOutput('📦 GitHub: github.com/aghodemon', 'highlight');
                    addOutput('💬 Discord: @demon1795', 'highlight');
                    addOutput('📧 Email: idemon1795@gmail.com', 'highlight');
                    addOutput('📱 Telegram: @demon1795', 'highlight');
                    addOutput('🐦 Twitter: @yourhandle', 'highlight');
                    addOutput('🔗 LinkedIn: linkedin.com/in/yourhandle', 'highlight');
                } else if (cmd === '/help') {
                    addOutput('Available commands:', 'highlight');
                    addOutput('/social   - show all social connections', 'normal');
                    addOutput('/skills   - show tech stack', 'normal');
                    addOutput('/projects - show recent projects', 'normal');
                    addOutput('/clear    - clear terminal', 'normal');
                    addOutput('/help     - show this help', 'normal');
                } else if (cmd === '/skills') {
                    addOutput('☕ Java  |  🟢 Node.js  |  🐍 Python', 'highlight');
                    addOutput('🐳 Docker  |  ⛏️ Minecraft  |  🔌 Plugins', 'highlight');
                    addOutput('🤖 Bots  |  ⚙️ Backend  |  🐧 Linux', 'highlight');
                } else if (cmd === '/projects') {
                    addOutput('📦 Minecraft Plugin Suite', 'highlight');
                    addOutput('🤖 Multi-Platform Bot System', 'highlight');
                    addOutput('🐳 Dockerized Backend Stack', 'highlight');
                    addOutput('⚡ CLI Tools & Automation', 'highlight');
                } else if (cmd === '/clear') {
                    terminalOutput.innerHTML = '';
                    addOutput('Terminal cleared.', 'dim');
                } else {
                    addOutput(`Command not found: ${cmd}. Try /help`, 'dim');
                }

                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }
        });

        document.querySelector('.terminal-wrap').addEventListener('click', () => {
            terminalInput.focus();
        });

        terminalInput.focus();