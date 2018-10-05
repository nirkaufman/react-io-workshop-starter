import React from "react";

const StoreContext = React.createContext();

export const Provider = ({store, children}) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {

  class ConnectedComponent extends React.Component {

    componentDidMount() {
      this.props.subscribe(() => this.setState({}));
    }

    render() {
      const {getState, dispatch} = this.props;

      const props = {
        ...mapStateToProps(getState()),
        ...mapDispatchToProps(dispatch)
      };

      return <WrappedComponent {...props} {...this.props} />
    }
  }

  return () => (
    <StoreContext.Consumer>
      {store => <ConnectedComponent {...store} />}
    </StoreContext.Consumer>
  )
};
