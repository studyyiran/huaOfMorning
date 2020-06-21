import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
// server端的问题
const body = document.querySelector("body");
let modalContainer: any = document.getElementById("#modal");
if (body) {
  // 如何检测是否有一个子节点持有？
  // let container = body.getElementById('#modal')
  modalContainer = document.createElement("div");
  body.appendChild(modalContainer);
}

interface IMyModal {
  visible?: boolean;
  children: any;
  showMask?: boolean;
  onMaskCancel?: Boolean;
  onCancel?: () => {};
  onOk?: () => {};
  footer?: any;
  okText?: String;
  cancelText?: String;
}

const classTag = "my-modal";

const Modal: React.FC<IMyModal> = (props) => {
  const {
    visible = false,
    children,
    showMask = true,
    onMaskCancel = true,
    onCancel = () => {},
    onOk = () => {},
    okText = "ok",
    cancelText = "cancel",
    title = "title",
    footer,
  } = props;

  const onCancelHandler = () => {
    onCancel();
  };

  const onOkHandler = () => {
    onOk();
  };

  const renderFooter = () => {
    const renderOk = () => {
      return <div onClick={onOkHandler}>{okText}</div>;
    };

    const renderCancel = () => {
      return <div onClick={onOkHandler}>{cancelText}</div>;
    };

    let dom;
    if (footer === null) {
      return null;
    } else {
      if (footer === "ok") {
        dom = renderOk;
      } else if (footer === "cancel") {
        dom = renderCancel;
      } else {
        dom = (
          <>
            {renderOk()}
            {renderCancel()}
          </>
        );
      }
    }
    return <div className={`${classTag}-footer`}>{dom}</div>;
  };

  return (
    <div className={`${classTag}`}>
      {showMask ? (
        <div
          className={`${classTag}-mask`}
          onClick={onMaskCancel ? onCancelHandler : () => {}}
        />
      ) : null}
      <div className={`${classTag}-body`}>
        <div className={`${classTag}-title`}>{title}</div>
        <div className={`${classTag}-content`}>{children}</div>
        {renderFooter()}
      </div>
    </div>
  );
};

export const MyModal = (myModalProps: IMyModal) => {
  return ReactDOM.createPortal(<Modal {...myModalProps} />, modalContainer);
};

// @ts-ignore
MyModal.confirm = function (myModalProps: IMyModal) {
  ReactDOM.createPortal(
    <Modal {...Object.assign(myModalProps, { visible: true })} />,
    modalContainer
  );
};

const test = () => {
  // MyModal.confirm();
  return <MyModal visible={true}>{123}</MyModal>;
};
