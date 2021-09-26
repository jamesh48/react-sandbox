import React from 'react';
import './app.scss';

export default ({ children }) => {

  const [selectedComponentId, setSelectedComponentId] = React.useState('');

  const handleSelectChange = () => {
    setSelectedComponentId(event.target.value);
  };

  return (
    <div id='app-root'>

      <select id='app-select' onChange={handleSelectChange}>
        <option value='default'>Select a component...</option>
        {children?.map(({ key, props: { label } }, index) => {
          return <option key={key} value={index}>{label}</option>
        })}
      </select>

      <main>
        {selectedComponentId ? children[selectedComponentId] : null}
      </main>
    </div>
  )
}