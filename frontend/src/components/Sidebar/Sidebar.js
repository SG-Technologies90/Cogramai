import { useState } from 'react';
import Link from 'next/link';

const sidebarNodes = [
  { num: '6',  label: 'Class VI' },
  { num: '7',  label: 'Class VII' },
  { num: '8',  label: 'Class VIII' },
  { num: '9',  label: 'Class IX' },
  { num: '10', label: 'Class X' },
  { num: '11', label: 'Class XI' },
  { num: '12', label: 'Class XII' },
];

export default function Sidebar() {
  const [activeNode, setActiveNode] = useState(0);

  return (
    <nav className="sidebar">
      {/* Logo */}
      <Link href="/" className="sidebar-logo">
        EP
      </Link>

      {/* Navigation Nodes */}
      <div className="sidebar-nodes">
        {sidebarNodes.map((node, i) => (
          <div
            key={node.num}
            className={`sidebar-node ${activeNode === i ? 'active' : ''}`}
            onClick={() => setActiveNode(i)}
          >
            <div className="node-dot">{node.num}</div>
            <div className="node-label">{node.label}</div>
          </div>
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="sidebar-bottom">
        <button className="sidebar-icon-btn" title="Notifications">🔔</button>
        <button className="sidebar-icon-btn" title="Settings">⚙️</button>
        <button
          className="sidebar-icon-btn"
          title="Profile"
          style={{
            background: 'linear-gradient(135deg, rgba(0,207,255,0.2), rgba(168,85,247,0.2))',
            borderColor: 'rgba(0,207,255,0.4)',
            color: 'var(--neon-cyan)',
          }}
        >
          👤
        </button>
      </div>
    </nav>
  );
}
