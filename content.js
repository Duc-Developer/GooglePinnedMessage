setTimeout(() => {
    const  frame = document.querySelectorAll('iframe[title="Nội dung trò chuyện"]')?.[0];
    const parentNode = frame?.parentNode;

    if(!parentNode) return;
    parentNode.style.position = 'relative'
    const box = document.createElement('div');
    
    // Create a text node with the content "Hello World"
    const textNode = document.createTextNode('Hello World');
    
    // Append the text node to the div
    box.appendChild(textNode);
    
    // Style the div directly using JavaScript
    box.style.position = 'absolute'; /* Fixed position */
    box.style.top = '85px'; /* Positioned at the top */
    box.style.left = '0'; /* Positioned at the left */
    box.style.width = '100%'; /* Full width */
    box.style.backgroundColor = '#FFFFFF'; /* Background color */
    box.style.padding = '10px'; /* Padding for content */
    box.style.boxSizing = 'border-box'; /* Include padding and border in the element's total width and height */
    box.style.textAlign = 'center'; /* Center the content horizontally */
    box.style.color = '#000000'; /* Text color */
    box.style.fontSize = '12px'; /* Font size */
    box.style.fontWeight = 'bold';
    box.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)'; /* Box shadow */

    parentNode.appendChild(box);
}, 5000)