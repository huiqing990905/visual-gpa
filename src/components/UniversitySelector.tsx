import { sampleUniversities } from '../data/sample';

interface UniversitySelectorProps {
    onSelect: (uniId: string) => void;
}

export function UniversitySelector({ onSelect }: UniversitySelectorProps) {
    return (
        <div className="university-selector">

            <div className="university-grid">
                {sampleUniversities.map((uni) => (
                    <button
                        key={uni.id}
                        className="university-card"
                        onClick={() => onSelect(uni.id)}
                        aria-label={`Select ${uni.name}`}
                    >
                        <div className="card-image" style={{ backgroundImage: `url(${uni.imageUrl})` }}>
                            <div className="badge-overlay">{uni.type}</div>
                        </div>
                        <div className="card-content">
                            <h3>{uni.name}</h3>
                            <div className="uni-meta">
                                <span>{uni.country}</span>
                                <span style={{ opacity: 0.3 }}>|</span>
                                <span style={{ color: 'var(--accent-primary)' }}>{uni.policies.length} Policies</span>
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            <div className="legal-disclaimer">
                <p><strong>Disclaimer:</strong> This CGPA calculator is provided for reference purposes only.
                    Calculations are based on publicly available academic regulations and may not reflect the latest official policies.
                    This platform is not affiliated with, endorsed by, or officially connected to any university.
                    Users should always verify their CGPA with their university’s official academic handbook or academic office.</p>
            </div>
        </div>
    );
}
