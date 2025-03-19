import React from 'react';

import S from "./styles/HeaderPages.module.css"

interface HeaderPageProps {
  PageIcon: React.ReactNode;
  PageName: string;
}

export const HeaderPage: React.FC<HeaderPageProps> = ({ PageIcon, PageName }) => {
  return (
    <button className={S.headerPage}>
      <div className={S.icon}>{PageIcon}</div>
      <p className={S.pageName}>{PageName}</p>
    </button>
  );
};
