var id = 0;
var Students = [
    {
        name: 'Fred',
        age: 10,
        id: id,
        timestamps: Date.now()
    }
];
export function getAll(req, res) {
    res.json(Students);
}
export function getone(req, res) {
    const { id } = req.params;
    res.json(Students[Number(id)]);
}
export function Delete(req, res) {
    const id = Number(req.params.id);
    Students.splice(id, 1);
    res.json(Students);
}
export function update(req, res) {
    const { id } = req.params;
    const { val } = req.body;
    Students[Number(id)].name = val;
    res.json(Students);
}
export function Add(req, res) {
    const { name } = req.body;
    id++;
    let newStu = {
        name: name,
        age: 100,
        id: id,
        timestamps: Date.now()
    };
    Students.push(newStu);
    res.json(Students);
}
