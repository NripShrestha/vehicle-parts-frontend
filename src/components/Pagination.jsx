import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ totalItems = 0, itemsPerPage = 10, currentPage = 1 }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      padding: '16px 24px',
      borderTop: '1px solid var(--color-border)',
      backgroundColor: 'var(--color-bg-card)',
      borderRadius: '0 0 var(--radius-md) var(--radius-md)'
    }}>
      <p style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
        Showing <span style={{ fontWeight: '600', color: 'var(--color-text-main)' }}>1</span> to <span style={{ fontWeight: '600', color: 'var(--color-text-main)' }}>{Math.min(itemsPerPage, totalItems)}</span> of <span style={{ fontWeight: '600', color: 'var(--color-text-main)' }}>{totalItems}</span> results
      </p>

      <div style={{ display: 'flex', gap: '8px' }}>
        <button className="btn btn-secondary" style={{ padding: '6px 12px', opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}>
          <ChevronLeft size={16} />
          Previous
        </button>
        
        <div style={{ display: 'flex', gap: '4px' }}>
          {[1, 2, 3].map(page => (
            <button 
              key={page}
              style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: '6px', 
                border: '1px solid var(--color-border)',
                backgroundColor: page === currentPage ? 'var(--color-primary)' : 'white',
                color: page === currentPage ? 'white' : 'var(--color-text-main)',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              {page}
            </button>
          ))}
        </div>

        <button className="btn btn-secondary" style={{ padding: '6px 12px' }}>
          Next
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
