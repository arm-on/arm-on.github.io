document.addEventListener("DOMContentLoaded", function() {
    const conversations = document.querySelectorAll('conversation');

    conversations.forEach(conversation => {
      const container = document.createElement('div');
      container.classList.add('col-md-12');

      // Split the conversation text by line
      const lines = conversation.textContent.trim().split('\n');
      let currentLineIndex = 0; // Track the current line index

      function showNextLine() {
        if (currentLineIndex < lines.length) {
          const line = lines[currentLineIndex].trim();
          if (line === '') {
            currentLineIndex++;
            showNextLine();
            return;
          }
          
          const [speaker, persian] = line.split('|').map(text => text.trim());
          const isFirstSpeaker = speaker.startsWith('Speaker1');
          const bubbleContainer = document.createElement('div');
          bubbleContainer.className = `bubble-container ${isFirstSpeaker ? '' : 'reverse'}`;

          const bubble = document.createElement('div');
          bubble.className = `speech-bubble ${isFirstSpeaker ? 'speech-bubble-left' : 'speech-bubble-right'}`;
          bubble.style.direction = 'ltr';
          bubble.classList.add('fade-in'); // Add the fade-in class

          const icon = document.createElement('i');
          icon.className = `fas fa-user${isFirstSpeaker ? '' : '-circle'} icon`;
          bubble.appendChild(icon);

          const textNode = document.createTextNode(speaker.replace('Speaker1:', '').replace('Speaker2:', '').trim());
          bubble.appendChild(textNode);

          const translation = document.createElement('div');
          translation.className = `translation ${isFirstSpeaker ? 'translation-rtl' : ''}`;
          translation.innerText = persian;
          bubble.appendChild(translation);

          bubbleContainer.appendChild(bubble);
          container.appendChild(bubbleContainer);

          // Add click event to the bubble to show the next line
          bubble.addEventListener('click', function() {
            currentLineIndex++;
            showNextLine();
            bubble.removeEventListener('click', arguments.callee); // Prevent multiple clicks on the same bubble
          });

          // Hide the remaining lines initially
          conversation.style.display = 'none';
        }
      }

      showNextLine(); // Start by showing the first line
      conversation.replaceWith(container); // Replace each <conversation> tag with the generated content
    });
  });