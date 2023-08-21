import { useState } from "react";
import { Button, Navbar,Container, } from 'react-bootstrap'
export function Header (){
    const [selectedGrade, setSelectedGrade] = useState('Grade 1');
  const [selectedSubjects, setSelectedSubjects] = useState({
    physics: false,
    chemistry: false,
    biology: false,
  });
  return(
<Navbar sticky="top" className="bg-white shadow-sm mb-3">
    <div className="container"> {/* Wrap content in a container for proper alignment and padding */}
        
        <div className="row mb-3">
            <div className="col">
                <h1 className="display-8">GoodDeeds Science Experiments</h1>
                <p className="lead">Discover fun and educational science experiments suitable for different grade levels.</p>
            </div>
        </div>

        <div className="row mb-2">
            <div className="col-md-15">
                <label>Grade Level:</label>
                <select className="form-control" value={selectedGrade} onChange={(e) => setSelectedGrade(e.target.value)}>
                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 2">Grade 2</option>
                    <option value="Grade 3">Grade 3</option>
                    <option value="Grade 4">Grade 4</option>
                    <option value="Grade 5">Grade 5</option>
                    <option value="Grade 6">Grade 6</option>

                </select>
            </div>
            <div className="text-center mb-1">
                <button className="btn btn-primary">Surprise Me!</button>
                </div>
        </div>
        

        <div className="row mb-4">
            <div className="col-md-6">
                <label>Subjects:</label>
                <div>
                    <div className="form-check form-check-inline">
                        <label className="form-check-label" htmlFor="physics">Physics</label>
                        <input className="form-check-input" type="checkbox" id="physics" checked={selectedSubjects.physics} onChange={() => setSelectedSubjects(prev => ({ ...prev, physics: !prev.physics }))} />
                        <label className="form-check-label" htmlFor="chemistry">chemistry</label>
                        <input className="form-check-input" type="checkbox" id="chemistry" checked={selectedSubjects.chemistry} onChange={() => setSelectedSubjects(prev => ({ ...prev, chemistry: !prev.chemistry }))} />
                        <label className="form-check-label" htmlFor="biology">biology</label>
                        <input className="form-check-input" type="checkbox" id="biology" checked={selectedSubjects.biology} onChange={() => setSelectedSubjects(prev => ({ ...prev, biology: !prev.biology }))} />
                    </div>
                </div>
            </div>
        </div>
    </div>
</Navbar>




)

}
