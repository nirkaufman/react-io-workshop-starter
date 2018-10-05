### Module II - Children

Learn how to leverage `children` to create an extendable component.

#### Instructions
Review the `start/Player.js` component. By the end of this exercise it should 
be able to work both with the built-in controls, and custom play/pause button that
provided as children;
  
#### Teacher notes
- ref = immutable object  
- if no children count show controls (use state - init from props)
- pros of initialize state in constructor
- static method
  
#### Steps

##### STEP I
- create a ref
- implement play and pause methods
- create compound components for play and pause
- Use map and cloneElement with children 
- discuss pros and cons, move towered nameSpaced (compound) component
  
```javascript
const videoRef = React.createRef();

class VideoPlayer extends Component {

  static Play = ({play, children}) => (
    <div className="btn btn-primary" onClick={play}>{children}</div>
  );

  static Pause = ({pause, children}) => (
    <div className="btn btn-primary" onClick={pause}>{children}</div>
  );

  static Player = ({ref, controls, file}) => (
    <video width="600" ref={videoRef} controls={controls} src={file}/>
  );

  constructor(props) {
    super(props);

    this.state = {
      showControls: !props.children
    }
  }

  play  = () => videoRef.current.play();
  pause = () => videoRef.current.pause();

  render() {
    const {children} = this.props;

    return (
      <>
        {React.Children.map(children, child => (
          React.cloneElement(child, {
            play: this.play,
            pause: this.pause,
            controls: this.state.showControls,
            file: this.props.file
          })
        ))}
      </>
    );
  }
}
```

##### STEP II
- break the feature with changes to the dom
- Introduce context

```javascript
const videoRef = React.createRef();
const VideoCtx = React.createContext();

class VideoPlayer extends Component {

  static Play = ({children}) => (
    <VideoCtx.Consumer>
      {({play}) => (
        <div className="btn btn-primary" onClick={play}>{children}</div>
      )}
    </VideoCtx.Consumer>
  );

  static Pause = ({children}) => (
    <VideoCtx.Consumer>
      {({pause}) => (
        <div className="btn btn-primary" onClick={pause}>{children}</div>
      )}
    </VideoCtx.Consumer>
  );

  static Player = () => (
    <VideoCtx.Consumer>
      {({controls, file}) => (
        <video width="600" ref={videoRef} controls={controls} src={file}/>
      )}
    </VideoCtx.Consumer>
  );

  constructor(props) {
    super(props);

    this.state = {
      showControls: !props.children
    }
  }

  play  = () => videoRef.current.play();
  pause = () => videoRef.current.pause();

  render() {
    return (
      <>
        <VideoCtx.Provider value={{
          play: this.play,
          pause: this.pause,
          file: this.props.file,
          controls: this.state.showControls
        }}>
          {this.props.children}
        </VideoCtx.Provider>

      </>
    );
  }
}
```

### BONUS:
every time that the provider value change, every consumer get rendered.
hoe can we prevent this?
  
#### Discussion
- React clone element - when to use it, pros and cons
- Children API - what we can do with it, why we should get to know it 
- Review this solution for extendable component. pros and cons
- Expose the raw video element to the outside world?
- protect if there is no context?
- provide meaningful errors
- protect if there is no children (render the player as default)  

