import styles from '../../sass/components/Wrappers/Animations.module.scss';


const delay = (delay = 0, index= 0) => `${delay + Number(`0.${index}`)}s`;

interface Props {
    children?: JSX.Element;
    delay?: number;
    index?: number;
    height?: number;
    width?: number;
}

const SideUp = ( props: Props ):JSX.Element => <div className={styles.sideup} style={{animationDelay: delay(props.delay, props.index), height: props.height, width: props.width }}>{props.children}</div>
const SideDown = ( props: Props ):JSX.Element => <div className={styles.sidedown} style={{animationDelay: delay(props.delay, props.index), height: props.height, width: props.width }}>{props.children}</div>
const SideRight = ( props: Props ):JSX.Element => <div className={styles.sideright} style={{animationDelay: delay(props.delay, props.index), height: props.height, width: props.width }}>{props.children}</div>
const SideLeft = ( props: Props ):JSX.Element => <div className={styles.sideleft} style={{animationDelay: delay(props.delay, props.index), height: props.height, width: props.width }}>{props.children}</div>
const SideRightModal = ( props: Props ):JSX.Element => <div className={styles.siderightmodal} style={{animationDelay: delay(props.delay, props.index), height: props.height, width: props.width }}>{props.children}</div>
const SideLeftModal = ( props: Props ):JSX.Element => <div className={styles.sideleftmodal} style={{animationDelay: delay(props.delay, props.index), height: props.height, width: props.width }}>{props.children}</div>


export { SideUp, SideRight, SideDown, SideLeft, SideLeftModal, SideRightModal }
