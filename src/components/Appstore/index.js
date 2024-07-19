import {Component} from 'react'

import AppItem from '../AppItem'
import TabItem from '../TabItem'
import {v4 as uuidv4} from 'uuid' 

import './index.css'

const SEARCH_ICON_URL =
  'https://tse4.mm.bing.net/th?id=OIP.rsZB5iKwX6totSXcV94swQHaHN&pid=Api&P=0&h=180'

const tabsList = [
  {tabId: 'SOCIAL', displayText: 'Social'},
  {tabId: 'GAMES', displayText: 'Games'},
  {tabId: 'NEWS', displayText: 'News'},
  {tabId: 'FOOD', displayText: 'Food'},
]

const appsList = [
  {
    appId: uuidv4(),
    appName: 'Facebook',
    imageUrl:
      'https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png',
    category: 'SOCIAL',
  },
  {
    appId: uuidv4(),
    appName: 'Messenger',
    imageUrl:
      'https://tse2.mm.bing.net/th?id=OIP.jrye59eWsyx2HWo06Gw45gHaEK&pid=Api&P=0&h=180',
    category: 'SOCIAL',
  },
  {
    appId: uuidv4(),
    appName: 'WhatsApp',
    imageUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/1d/84/9b/1d849be7-a1a6-f7a7-22eb-afb50146c1a0/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png',
    category: 'SOCIAL',
  },
  {
    appId: uuidv4(),
    appName: 'Instagram',
    imageUrl:
      'http://pluspng.com/img-png/instagram-logo-eps-png-instagram-logo-1784.png',
    category: 'SOCIAL',
  },
  {
    appId: uuidv4(),
    appName: 'Snapchat',
    imageUrl:
      'https://tse4.mm.bing.net/th?id=OIP.ZSXqNDCiFF5HLOAw3Zi9ywHaHa&pid=Api&P=0&h=180',
    category: 'SOCIAL',
  },
  {
    appId: uuidv4(),
    appName: 'Twitter',
    imageUrl:
      'https://icons.veryicon.com/png/Phone/iOS7%20Style/Twitter.png',
    category: 'SOCIAL',
  },
  {
    appId: uuidv4(),
    appName: 'Pinterest',
    imageUrl:
      'https://tse4.mm.bing.net/th?id=OIP.V5RoSjcG3SmfjaGnf8MyFwHaHa&pid=Api&P=0&h=180',
    category: 'SOCIAL',
  },
  {
    appId: uuidv4(),
    appName: 'WeChat',
    imageUrl:
      'https://clipart.info/images/ccovers/1499955338wechat-logo-png.png',
    category: 'SOCIAL',
  },
  {
    appId: uuidv4(),
    appName: 'LinkedIn',
    imageUrl:
      'https://pngimg.com/uploads/linkedIn/linkedIn_PNG8.png',
    category: 'SOCIAL',
  },
  {
    appId: uuidv4(),
    appName: 'Telegram',
    imageUrl:
      'https://logodownload.org/wp-content/uploads/2017/11/telegram-logo-8.png',
    category: 'SOCIAL',
  },
  {
    appId: uuidv4(),
    appName: 'Subway Surfers',
    imageUrl:
      'https://mir-s3-cdn-cf.behance.net/project_modules/disp/9ff8cb66552561.5b198c8f782f1.png',
    category: 'GAMES',
  },
  {
    appId: uuidv4(),
    appName: 'Crossy Road',
    imageUrl:
      'https://cdn.jim-nielsen.com/ios/512/crossy-road-endless-arcade-2014-12-02.png',
    category: 'GAMES',
  },
  {
    appId: uuidv4(),
    appName: 'Super Chef',
    imageUrl:
      'https://i.pinimg.com/originals/42/58/6d/42586dbeec7a2900302dce609e646ae7.jpg',
    category: 'GAMES',
  },
  {
    appId: uuidv4(),
    appName: 'Angry Birds',
    imageUrl:
      'https://tse3.mm.bing.net/th?id=OIP.AW1-dVDqJJ5P5HIDsQE_8gHaGo&pid=Api&P=0&h=180',
    category: 'GAMES',
  },
  {
    appId: uuidv4(),
    appName: 'Hill Climb 2',
    imageUrl:
      'https://tse2.mm.bing.net/th?id=OIP.EydLrTAKJo5v-t_HCfEqYwHaEL&pid=Api&P=0&h=180',
    category: 'GAMES',
  },
  {
    appId: uuidv4(),
    appName: 'Temple Run',
    imageUrl:
      'https://cdn.jim-nielsen.com/ios/1024/temple-run-2-2021-07-20.png',
    category: 'GAMES',
  },
  {
    appId: uuidv4(),
    appName: 'Dr. Driving',
    imageUrl:
      'https://tse1.mm.bing.net/th?id=OIP.G8eUmSW1bCGkz9AhSMpUiwHaEK&pid=Api&P=0&h=180',
    category: 'GAMES',
  },
  {
    appId: uuidv4(),
    appName: 'Smurfs Bubble',
    imageUrl:
      'https://tse3.mm.bing.net/th?id=OIP.1iAa_YeFzxuvMaySKKbSywHaEK&pid=Api&P=0&h=180',
    category: 'GAMES',
  },
  {
    appId: uuidv4(),
    appName: 'Grade Learning',
    imageUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/51/1e/d0/511ed03f-c58c-4293-ea79-068778fe3867/AppIcon-1x_U007emarketing-0-7-85-220.png/512x512bb.jpg',
    category: 'GAMES',
  },
  {
    appId: uuidv4(),
    appName: 'My Talking Tom',
    imageUrl:
      'https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/af/00/e3/af00e318-03b7-a6c0-f2f9-722dad867d66/source/1280x1280bb.jpg',
    category: 'GAMES',
  },
  {
    appId: uuidv4(),
    appName: 'Inshorts',
    imageUrl:
      'https://tse3.mm.bing.net/th?id=OIP.PCJVA7F9OOV_CZC8CQEKIAHaEK&pid=Api&P=0&h=180',
    category: 'NEWS',
  },
  {
    appId: uuidv4(),
    appName: 'Way2News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-way2news.png',
    category: 'NEWS',
  },
  {
    appId: uuidv4(),
    appName: 'Google News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-google-news.png',
    category: 'NEWS',
  },
  {
    appId: uuidv4(),
    appName: 'Flipboard',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-flipboard.png',
    category: 'NEWS',
  },
  {
    appId: uuidv4(),
    appName: 'SmartNews',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-smart-news.png',
    category: 'NEWS',
  },
  {
    appId: uuidv4(),
    appName: 'BBC News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-bbc-news.png',
    category: 'NEWS',
  },
  {
    appId: uuidv4(),
    appName: 'CNN News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-cnn-news.png',
    category: 'NEWS',
  },
  {
    appId: uuidv4(),
    appName: 'Daily Wire',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-daily-wire.png',
    category: 'NEWS',
  },
  {
    appId: uuidv4(),
    appName: 'AP News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-ap-news.png',
    category: 'NEWS',
  },
  {
    appId: uuidv4(),
    appName: 'News Break',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-news-break.png',
    category: 'NEWS',
  },
  {
    appId: uuidv4(),
    appName: 'Zomato',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-zomato.png',
    category: 'FOOD',
  },
  {
    appId: uuidv4(),
    appName: 'Swiggy',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-swiggy.png',
    category: 'FOOD',
  },
  {
    appId: uuidv4(),
    appName: "Domino's Pizza",
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-dominos.png',
    category: 'FOOD',
  },
  {
    appId: uuidv4(),
    appName: 'All in One',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-all-in-one.png',
    category: 'FOOD',
  },
  {
    appId: uuidv4(),
    appName: 'Instacart',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-insta-cart.png',
    category: 'FOOD',
  },
  {
    appId: uuidv4(),
    appName: 'Saucey',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-saucey.png',
    category: 'FOOD',
  },
  {
    appId: uuidv4(),
    appName: 'Waitr',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-waitr.png',
    category: 'FOOD',
  },
  {
    appId: uuidv4(),
    appName: 'Grubhub',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-grubhub.png',
    category: 'FOOD',
  },
  {
    appId: uuidv4(),
    appName: 'Mercato',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-mercato.png',
    category: 'FOOD',
  },
  {
    appId: uuidv4(),
    appName: 'DOT',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/food-dot.png',
    category: 'FOOD',
  },
]

class AppStore extends Component {
  state = {
    searchInput: '',
    activeTabId: tabsList[0].tabId,
  }

  setActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getActiveTabApps = searchedApps => {
    const {activeTabId} = this.state
    const filteredApps = searchedApps.filter(
      eachSearchedApp => eachSearchedApp.category === activeTabId,
    )

    return filteredApps
  }

  getSearchResults = () => {
    const {searchInput} = this.state
    const searchResults = appsList.filter(eachApp =>
      eachApp.appName.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return searchResults
  }

  render() {
    const {searchInput, activeTabId} = this.state
    const searchResults = this.getSearchResults()
    const filteredApps = this.getActiveTabApps(searchResults)

    return (
      <div className="app-container">
        <div className="app-store">
          <h1 className="heading">App Store</h1>
          <div className="search-input-container">
            <input
              type="search"
              placeholder="Search"
              className="search-input"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src={SEARCH_ICON_URL}
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="tabs-list">
            {tabsList.map(eachTab => (
              <TabItem
                key={eachTab.tabId}
                tabDetails={eachTab}
                setActiveTabId={this.setActiveTabId}
                isActive={activeTabId === eachTab.tabId}
              />
            ))}
          </ul>
          <ul className="apps-list">
            {filteredApps.map(eachApp => (
              <AppItem key={eachApp.appId} appDetails={eachApp} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default AppStore