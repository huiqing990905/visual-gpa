export const DemoPlaceholder = () => {
    return (
        <div className="planner-preview" aria-label="Example CGPA planning result">
            <div className="preview-topline">
                <span>Semester plan</span>
                <span className="preview-status">On track</span>
            </div>
            <div className="preview-score-row">
                <div>
                    <small>Current</small>
                    <strong>3.45</strong>
                </div>
                <span className="preview-arrow">→</span>
                <div className="preview-potential">
                    <small>Projected</small>
                    <strong>3.76</strong>
                    <span>+0.31</span>
                </div>
            </div>
            <div className="preview-rule">
                <span>Classification</span>
                <strong>First Class</strong>
            </div>
            <div className="preview-rule">
                <span>Policy</span>
                <strong>Latest attempt · 4 dp</strong>
            </div>
        </div>
    );
};
