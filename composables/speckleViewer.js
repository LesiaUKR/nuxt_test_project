export async function initSpeckleViewer(container, speckleUrl) {
  try {
    const { 
      Viewer, 
      DefaultViewerParams, 
      SpeckleLoader, 
      UrlHelper,
      CameraController,
      SelectionExtension
    } = await import('@speckle/viewer');
    
    const params = {
      ...DefaultViewerParams,
      showStats: false,
      verbose: true
    };

    const viewer = new Viewer(container, params);
    await viewer.init();
    
    viewer.createExtension(CameraController);
    viewer.createExtension(SelectionExtension);

    const urls = await UrlHelper.getResourceUrls(speckleUrl);
    if (!urls || urls.length === 0) {
      throw new Error('Failed to get resource URL');
    }

    for (const url of urls) {
      const loader = new SpeckleLoader(viewer.getWorldTree(), url, '');
      await viewer.loadObject(loader, true);
    }

    return viewer;
  } catch (error) {
    console.error('Speckle Viewer initialization error:', error);
    throw error; // Передаємо помилку далі
  }
}
