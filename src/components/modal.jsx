import { PureComponent } from 'react';
import { createPortal } from 'react-dom';

export default class Modal extends PureComponent {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.modalRoot = document.getElementById('modal-root');
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;

    return createPortal(children, this.el);
  }
}
