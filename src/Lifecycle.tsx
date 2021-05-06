import React from 'react';

interface ILifecycleProps {
	someProp: number;
}

interface ILifecycleState {
	stateField: number;
	isMounted: boolean;
	hasError: boolean;
}

export class Lifecycle extends React.Component <ILifecycleProps, ILifecycleState> {
    constructor(props: ILifecycleProps) {
    	super(props);

    	this.state = {stateField: 0, isMounted: false, hasError: false};
    }

    static getDerivedStateFromProps(
    	props: Readonly<ILifecycleProps>, 
    	state: Readonly<ILifecycleState>) {
    	return {stateField: props.someProp};
    }

    public componentDidMount() {//side-эффекты после загрузки в браузер
    	document.addEventListener('resize', () => {});
    	setTimeout( () => {}, 0);
    	this.setState({isMounted: true});
    }

    public componentWillMount() {//сброс side-эффектов
    	document.addEventListener('resize', () => {});
    	setTimeout( () => {}, 0);
    	this.setState({isMounted: true});
    }

    public shouldComponentUpdate(//обновление
    	nextProps: Readonly<ILifecycleProps>,
    	nextState: Readonly<ILifecycleState>,
    	nextContext: any
    	): boolean {
    	return true;
    }

    public getSnapshotBeforeUpdate(//получить значение, которое есть в браузере
    	prevProps: Readonly<ILifecycleProps>,
    	prevState: Readonly<ILifecycleState>
    	): any|null {
    	return 1234;
    }

    public componentDidUpdate(//обновление
    	prevProps: Readonly<ILifecycleProps>,
    	prevState: Readonly<ILifecycleState>,
    	snapshot?: any
    	) {
    	if(snapshot > 100) {
    		this.setState({});
    	}
    }


    public render() {
    	if(this.state.hasError) {
    		return <div>Error</div>;
    	}
    	return <div>1</div>
    }

    private handleClick = () => {
    	this.setState({stateField: 1})
    }

}