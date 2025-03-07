const formFieldConfiguration = [
    {id: 'studentname', label: 'nev', type: 'text'},
    {id: 'studentaverage', label: 'atlag', type: 'text'},
    {id: 'studentcomment', label: 'Komment', type: 'text'},
    {id: 'studentbad', label: 'bad-e', type: 'checkbox', optional: true},
]

const manager = new Manager();
const formController = new FormController(formFieldConfiguration, manager);
const exportbutton = document.createElement("button")
exportbutton.textContent = "Export"
document.body. appendChild(exportbutton);
exportbutton.addEventListener("click", ()=>{
    const link = document.createElement("a");
    const content = manager.generateTextForExport();
    const file = new Blob([content]);
    link.href = URL.createObjectURL(file);
    link.download = "newdata.csv";
    link.click();
    URL.revokeObjectURL(link.href);

})