import { PADDING, type SectionProps } from '../constants';

export const Section: React.FC<SectionProps> = ({ children }) => (
    <div style={{ height: '100vh' }}>
        <div
            className="section"
            style={{
                height: '100%',
                paddingTop: PADDING.verticalSection,
                paddingBottom: PADDING.verticalSection,
            }}
        >
            {children}
        </div>
    </div>
);