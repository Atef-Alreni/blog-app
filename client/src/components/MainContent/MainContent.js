import SideNav from "./SideNav/SideNav.js";
import "./styles.css";

function MainContent({ custom, customChildren, title, sideNav, children }) {
  return (
    <main className={custom ? custom : "main-content"}>
      <div
        className={
          customChildren ? customChildren : "content-children-container"
        }>
        {title ? (
          <>
            <h2 className='title'>{title}</h2>
          </>
        ) : (
          ""
        )}
        {children}
      </div>
      {sideNav ? <SideNav /> : ""}
    </main>
  );
}

export default MainContent;
