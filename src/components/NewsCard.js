import React, { Component } from 'react'
import News from './News'
//import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import ScrollToTop from "react-scroll-to-top";
import Arrow from './Arrow';


export class NewsCard extends Component {
    static defaultProps=
    {
        country :'in',
        pageSize: 12,
        catagory: 'general'
    }
    static propTypes=
    {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        catagory: PropTypes.string

    }
    articles= [];

    constructor(props)
    {
        super(props);
        console.log("Constructor running....");
        this.state ={
            articles:[], //this.articles
            loading: false,
            page:1,
            totalResults:0,
            
        }
        document.title= `News 24/7- ${(this.props.catagory).charAt(0).toUpperCase()+(this.props.catagory).slice(1)}`;
    }
    // async UpdateNews()
    // {
    //     const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=b913efa2e7244bc0ac9ce61fb8fe095f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
       
    //     this.setState({loading:true})
    //     let data=await fetch(url); // used fetch API to get thr url and return it in the data variable as a promise. This is in await state as used async
    //     let parsedData=await data.json();// parsed the data from the fetch API is JSON 
    //     console.log(parsedData); // printing the data in console 

    //     this.setState({
    //         articles:parsedData.articles,
    //         totalResults:parsedData.totalResults,
    //         loading:false
    //     }); 
        
    // }

    async componentDidMount() // Used didMountComponent with async for lifecycle of this function
    {
        this.props.setProgress(10);
        console.log("Component Did mount running..");
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
       
        this.setState({loading:true})
        let data=await fetch(url); // used fetch API to get thr url and return it in the data variable as a promise. This is in await state as used async
        let parsedData=await data.json();// parsed the data from the fetch API is JSON 
        console.log(parsedData); // printing the data in console 

        this.props.setProgress(100);

        this.setState({
            articles:parsedData.articles,
            totalResults:parsedData.totalResults,
            loading:false
        }); // Using setState set the parsed articles to this articles
        
        //this.UpdateNews();


    }
    // PreviousPageClick =async()=>{
    //     if(!(this.state.page - 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
    //     {
    //         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=b913efa2e7244bc0ac9ce61fb8fe095f&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
            
    //         this.setState({loading:true})
    //         let data=await fetch(url); 
    //         let parsedData=await data.json();
    //         console.log(parsedData); 
    
    //         this.setState({
    //             page:this.state.page - 1,
    //             articles:parsedData.articles,
    //             loading:false
    //         }); 
    //     }  
    //     // this.setState({page: this.state.page-1});
    //     // this.UpdateNews();

       
    // }

    // NextPageClick=async()=>{
    //     if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
    //     {
    //         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=b913efa2e7244bc0ac9ce61fb8fe095f&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
            
    //         this.setState({loading:true})
    //         let data=await fetch(url); 
    //         let parsedData=await data.json();
    //         console.log(parsedData); 

    //         this.setState({
    //             page:this.state.page + 1,
    //             articles:parsedData.articles,
    //             loading:false
    //         }); 
    //     }

    //     // this.setState({page: this.state.page+1});
    //     // this.UpdateNews();
    // }


    fetchMoreData =async() => {
    //     // a fake async api call like which sends
    //     // 20 more records in 1.5 secs
       
        this.setState({page: this.state.page + 1});

        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
       
        this.setState({loading:true});
        let data=await fetch(url); // used fetch API to get thr url and return it in the data variable as a promise. This is in await state as used async
        let parsedData=await data.json();// parsed the data from the fetch API is JSON 
        //console.log(parsedData); // printing the data in console 

        this.setState({
            articles:this.state.articles.concat(parsedData.articles),
            page:this.state.page + 1,
            // totalResults:parsedData.totalResults,
            // loading:false
        });
       
       
      }


  render() {
    console.log("Rendering..");

    return (
        //   < className="container my-3 mx-6">
        <> 
        <h1 className="text-center my-6" style={{marginTop:'90px'}}>Top {(this.props.catagory).charAt(0).toUpperCase()+(this.props.catagory).slice(1)} HeadLines</h1>
        {/* {this.state.loading && <Spinner/>} */}
        
        <ScrollToTop smooth component={<Arrow/>} style={{backgroundColor:'white', width:'50px',height:'50px',marginBottom:'50px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 15px 0 rgba(0, 0, 0, 0.19)'}} />
        <InfiniteScroll 
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          //loader= {<Spinner/>}  
        >
        <div className="container">
            <div className="row ">
            {this.state.articles.map((element)=>{
                return (<div className="col-md-3 mx-0" key={element.url?element.url:"" }>
                    <News  title={element.title?element.title.slice(0,55):" "} description={element.description?element.description.slice(0,100):" "} newsUrl={element.url} imageUrl={element.urlToImage} DateandTime={element.publishedAt} source={element.source.name}/>
                </div>);

            })}
                
            </div>
        </div>
        </InfiniteScroll>  
      
       

      </>
       
    );
  }
}

export default NewsCard



