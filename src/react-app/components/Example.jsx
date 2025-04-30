import React from 'react';
import LazyImage from './LazyImage';

const Example = () => {
  return (
    <div className="example-container">
      <h2>Lazy Loaded Images Example</h2>
      
      <div className="image-grid">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="image-item">
            <LazyImage 
              src={`https://picsum.photos/400/300?random=${num}`} 
              alt={`Example image ${num}`} 
              className="grid-image"
            />
            <p>Image {num}</p>
          </div>
        ))}
      </div>
      
      <div className="long-content">
        <h3>Scroll down to see more images load</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget turpis pellentesque efficitur nec quis leo.</p>
        
        <div className="priority-content">
          <p>This content uses the content-visibility CSS property for optimized rendering.</p>
        </div>
        
        <div className="image-row">
          {[7, 8, 9].map((num) => (
            <div key={num} className="image-item">
              <LazyImage 
                src={`https://picsum.photos/800/500?random=${num}`} 
                alt={`Example image ${num}`} 
                className="large-image"
              />
              <p>Image {num}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example; 