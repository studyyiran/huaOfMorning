import React, {useEffect, useState} from "react";
import './index.less';

interface IComponent {

}

export const ZhenDongQi: React.FC<IComponent> = props => {
  const [timer, setTimer] = useState(0)

  const interval = 1000

  useEffect(() => {
    window.setInterval(() => {
      setTimer((time) => {
        return time + 1
      })
    }, interval)
  }, [])

  return <div className="component-style">{props.children}</div>
}