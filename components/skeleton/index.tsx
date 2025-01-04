const Skeleton = () => {
    return (
      <div className="skeleton animate-pulse" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="wrapper" style={{ position: 'relative', width: '232px', height: '225px', backgroundColor: '#e4e4e4' }}>
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '70%',
              backgroundColor: '#d6d6d6',
              borderRadius: '4px',
            }}
            className="animate-pulse"
          ></div>
          <div
            style={{
              position: 'absolute',
              bottom: '15%',
              left: '10%',
              width: '30%',
              height: '10%',
              backgroundColor: '#d6d6d6',
              borderRadius: '4px',
            }}
            className="animate-pulse"
          ></div>
          <div
            style={{
              position: 'absolute',
              bottom: '5%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60%',
              height: '10%',
              backgroundColor: '#d6d6d6',
              borderRadius: '4px',
            }}
            className="animate-pulse"
          ></div>
        </div>
      </div>
    );
  };
  
  export default Skeleton;
  