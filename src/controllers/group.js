import groupPage from '@pages/groupPage';

const groupController = async (browserInstance) => {
  try{
    await groupPage.init(browserInstance);
  }
  catch(err){
    console.log("Error in group page controller => ", err);
  }
}

export {
  groupController
}
