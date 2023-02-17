import Letters from '@ckeditor/letters/src/letters';

Letters.create( document.querySelector( '#body' ), {
    heading: {
        options: [
            { model: 'paragraph', title: 'Paragraph' },
            { model: 'heading1', view: 'h2', title: 'Heading 1' },
            { model: 'heading2', view: 'h3', title: 'Heading 2' },
            { model: 'heading3', view: 'h4', title: 'Heading 3' }
        ]
    },
    blockToolbar: [
        'paragraph',
        'heading1',
        'heading2',
        'heading3',
        'numberedList',
        'bulletedList',
        'blockQuote',
        'imageUpload'
    ],
    cloudServices: {
        // PROVIDE CORRECT VALUES HERE:
        tokenUrl: 'https://example.com/cs-token-endpoint',
        uploadUrl: 'https://your-organization-id.cke-cs.com/easyimage/upload/',
        webSocketUrl: 'your-organization-id.cke-cs.com/ws/'
    },
    collaboration: {
        channelId: 'headingConfiguration'
    },
    title: 'Welcome to Letters',
    body: '<p>Distraction-free writing and real-time collaborative editing made for you.</p>'
} )
.then( letters => {
    window.letters = letters;
} )
.catch( error => console.error( error ) );