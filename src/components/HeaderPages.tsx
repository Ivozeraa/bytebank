import React from 'react';

interface HeaderPagesProps {
  PageIcon: React.ReactNode;
  PageName: string;
}

export const HeaderPages: React.FC<HeaderPagesProps> = ({ PageIcon, PageName }) => {
  return (
    <div className="header-page">
      <div className="icon">{PageIcon}</div>
      <p className="page-name">{PageName}</p>
    </div>
  );
};
