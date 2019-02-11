import React, { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return width;
}

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  });
}

const useFormInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onHandleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  }
  return { value, onChange: onHandleChange };
}

export const CustomHook = () => {
  const title = useFormInput('Heading');
  const designation = useFormInput('Software Engineer');
  const width = useWindowWidth();

  useDocumentTitle(title.value);

  return (
    <div className="Component__useState">
      <section className="row">
        <span>Title</span>
        <input {...title} />
      </section>
      <section className="row">
        <span>Designation</span>
        <input {...designation} />
      </section>
      <section className="row">
        <span>Width</span>
        <input type="text" value={width} disabled />
      </section>
    </div>
  );
}