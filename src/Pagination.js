import React,{Component} from 'react';
class Pagination extends Component{

    constructor(props){
        super(props);
        this.state={activePage:0};
        this.pageCount=0;
        this.arr=[];
        this.selectedPage=this.state.activePage;
        this.buttonShift=0;
        this.half=Math.floor(this.props.pageRange/2);
    }
    

    render(){
        for(let i=0;i<this.props.total;i++)
        this.arr.push(i);
       
        const n=this.props.itemPerPage;
        this.pageCount=Math.ceil((this.props.total/n));
        if(this.pageCount<=1){
            return (<></>);
        }
        return(
            <div className="pagination-box">
                <div className="page-buttons">
               
                {/* previous */}
                <button onClick={()=> {this.props.changePage(0); 
                        this[this.state.activePage].style.padding="5px 8px";
                               this.setState({activePage:0},()=>this[this.state.activePage].style.padding="8px 13px");
                        }}
                         ref={e=>this.previous=e}
                        className="page-button">&#60;&#60;</button>

                {/* buttons */}
                {[...Array(this.props.pageRange)].map((e, i) => 
                    {
                        // if(this.selectedPage>this.half)   
                        this.buttonShift=this.selectedPage-this.half;
                        
                        if(this.arr[i+this.buttonShift]+1>this.pageCount){
                            return(null)
                        }   
                        
                        if(isNaN(this.arr[i+this.buttonShift]))
                        {
                            console.log(i+this.buttonShift);
                            this.buttonShift=0;
                              return(null)
                        }
                      

                    return(<button onClick={()=> {this.props.changePage(n*this.arr[i+this.buttonShift]);
                            this.selectedPage=i+1;
                            this[this.state.activePage].style.padding="5px 8px";
                            this.setState({activePage:this.arr[i+this.buttonShift]},()=>this[this.state.activePage].style.padding="8px 13px");
                            }}
                            key={i} ref={e=>this[this.arr[i+this.buttonShift]]=e}
                            className="page-button">{this.arr[i+this.buttonShift]+1}</button>);
                    }
                    )}
                {/* last button */}
                <button onClick={()=> {this.props.changePage(0); 
                        this[this.state.activePage].style.padding="5px 8px";
                               this.setState({activePage:this.pageCount-1},()=>this[this.state.activePage].style.padding="8px 13px");
                        }}
                         ref={e=>this.previous=e}
                        className="page-button">&#62;&#62;</button>
                </div>
            </div>
            
        );
    }
}


export default Pagination;



            //  {[...Array(n)].map((e, i) => <span className="busterCards" key={i}>♦</span>)}
