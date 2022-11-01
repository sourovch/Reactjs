const rootElm = document.getElementById('root');

const Button = ({ onClick, text, style, className }) => (
  <button onClick={onClick} style={style} className={className}>
    {text}
  </button>
);

const ButtonWithStyle = (Component, name = 'default') => {
  const colors = [
    {
      name: 'default',
      backgroundColor: '#e7e7e7',
      color: '#000000',
    },
    {
      name: 'react',
      backgroundColor: '#61dbfb',
      color: '#ffffff',
    },
    {
      name: 'success',
      backgroundColor: '#4CAF50',
      color: '#ffffff',
    },
    {
      name: 'danger',
      backgroundColor: '#f44336',
      color: '#ffffff',
    },
    {
      name: 'warning',
      backgroundColor: '#ff9800',
      color: '#ffffff',
    },
  ];

  const { color, backgroundColor } = colors.find(
    (i) => i.name === name
  ) || { color: '#fff', backgroundColor: '#000' };

  const style = {
    padding: '.8em 3.5em',
    border: 'none',
    borderRadius: 3,
    margin: 3,
    backgroundColor,
    color,
    cursor: 'pointer',
  };

  return (props) => <Component style={style} {...props} />;
};

const onClick = (text = 'button Clicked') => {
  return (e) => alert(text);
};

const NewButton = ButtonWithStyle(Button);
const Reactbtn = ButtonWithStyle(Button, 'react');
const Successbtn = ButtonWithStyle(Button, 'success');
const Warningbtn = ButtonWithStyle(Button, 'warning');
const Dangerbtn = ButtonWithStyle(Button, 'danger');
const JustButton = ButtonWithStyle(Button, 'fjfj');

class Input extends React.Component {
  render() {
    return <input {...this.props} />;
  }
}

const inputConstructor = (Component, type = 'text') => {
  const classNames = [
    {
      name: 'text',
      className: 'txtInp',
    },
    {
      name: 'email',
      className: 'emailInp',
    },
    {
      name: 'password',
      className: 'passInp',
    },
  ];
  const { className } =
    classNames.find((i) => i.name === type) || classNames[0];

  return (props) => (
    <Component
      type={type}
      className={`input ${className}`}
      {...props}
    />
  );
};

const TextInput = inputConstructor(Input);
const EmailInput = inputConstructor(Input, 'email');
const PasswordInput = inputConstructor(Input, 'password');

ReactDOM.render(
  <>
    <div>
      <NewButton text="Alart!!!" onClick={onClick()} />
      <Reactbtn text="React" onClick={onClick('React btn Clicked')} />
      <Successbtn
        text="Success"
        onClick={onClick('Success btn Clicked')}
      />
      <Warningbtn
        text="Warning"
        onClick={onClick('Warning btn Clicked')}
      />
      <Dangerbtn
        text="Danger"
        onClick={onClick('Danger btn Clicked')}
      />
      <JustButton
        text="Just btn"
        onClick={onClick('Just btn Clicked')}
      />
    </div>
    <div>
      <TextInput placeholder="name" />
      <div className="emailInp-wrapper">
        <EmailInput placeholder="email" />
      </div>
      <PasswordInput placeholder="password" />
      <JustButton
        className="submit-btn"
        text="Submit"
        onClick={(e) => console.log('Submited')}
      />
    </div>
  </>,
  rootElm
);
