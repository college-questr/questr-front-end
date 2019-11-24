 export const modules = {
     toolbar: [
         [{
             'header': [1, 2, false]
         }],
         ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
         [{
             'list': 'ordered'
         }, {
             'list': 'bullet'
         }, {
             'indent': '-1'
         }, {
             'indent': '+1'
         }],
         ['link', 'image'],
         ['clean']
     ],
 };


 export const formats = [
     'header',
     'bold', 'italic', 'underline', 'strike', 'blockquote',
     'list', 'bullet', 'indent',
     'link', 'image', 'code-block'
 ];