import styles from '../sass/global.module.scss';

const Grid = (props) => <div className={styles.grid} style={{gap: `${props.gap}rem`, gridTemplateColumns: props.columns, gridTemplateRows: props.rows, justifyItems: `${props.justifyItems}`, height: `${props.height}`, marginBottom: `${props.marginBottom}rem`, marginTop: `${props.marginTop}rem`, paddingLeft: `${props.paddingHorizontal}rem`, paddingRight: `${props.paddingHorizontal}rem`,}}>{props.children}</div>;
const Grid_Header = (props) => <h4 className={styles.header}>{props.children}</h4>;
const Column = (props) => <div className={styles.column} style={{gap: `${props.gap}rem`, marginTop: `${props.marginTop}rem`, marginBottom: `${props.marginBottom}rem`, paddingBottom: `${props.paddingBottom}rem`, height: `${props.height}`,  overflow: `${props.fixed ? "initial" : "auto"}`, paddingRight: `${props.fixed ? "0" : "1rem"}`, textAlign: `${props.centerText ? "center" : "initial"}`}} >{props.children}</div>;
const ColumnCentered = (props) => <div className={styles.column} style={{gap: `${props.gap}rem`, marginTop: `${props.marginTop}rem`, alignItems: "center"}}>{props.children}</div>;
const ColumnSpaced = (props) => <div className={styles.columnSpaced} style={{gap: `${props.gap}rem`, marginTop: `${props.marginTop}rem`, marginBottom: `${props.marginBottom}rem`, paddingBottom: `${props.paddingBottom}rem`,  overflow: `${props.fixed ? "initial" : "auto"}`, paddingRight: `${props.fixed ? "0" : "1rem"}`}} >{props.children}</div>;
const Row = (props) => <div className={styles.row} style={{gap: `${props.gap}rem`, marginTop: `${props.marginTop}rem`, marginTop: props.marginTopAuto ? "auto" : null, alignItems: `${props.start ? "flex-start" : "center"}`, overflowX: `${props.overflow ? "auto" : null}`, paddingRight: `${props.overflow ? "2.5rem" : null}`, flexWrap: props.nowrap ? "nowrap" : "wrap"} }>{props.children}</div>
const RowCentered = (props) => <div className={styles.row} style={{gap: `${props.gap}rem`, marginTop: `${props.marginTop}rem`, marginTop: props.marginTopAuto ? "auto" : null, alignItems: `${props.start ? "flex-start" : "center"}`, justifyContent: 'center', overflowX: `${props.overflow ? "auto" : null}`, paddingRight: `${props.overflow ? "2.5rem" : null}`, flexWrap: props.nowrap ? "nowrap" : "wrap"} }>{props.children}</div>
const RowSpaced = (props) => <div className={styles.rowSpaced} style={{gap: `${props.gap}rem`, marginTop: props.marginTopAuto ? "auto" : null, marginTop: `${props.marginTop}rem`, alignItems: `${props.start ? "flex-start" : "center"}`, flexWrap: props.nowrap ? "nowrap" : "wrap"}}>{props.children}</div>

export { Grid, Column, ColumnSpaced, ColumnCentered, Grid_Header, Row, RowSpaced, RowCentered, }