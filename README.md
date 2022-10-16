## contextMenu

Demo of using contextMenu component and useContextMenu custome hook [DEMO](https://ordamari.github.io/contextMenu/)

On every browser have a default context menu that allow to control browser settings,
the way to open a context menu is by using right mouse click on computer and hold touch on mobile.

When we build web apllication we can add ellement onContextMenu event and place there any function that we want, in this aplication i build alternative context menu that contain what i decide, to control when contextMenu open and where is open, i bulid useContextMenu custome hook that return all the data that context menu need and the function to open the context menu,

useContextMenu is very simply to use, he get the callback function and return contextMenuHandler, contextMenuPosition and isShowContextMenu, contextMenuHandler is the fuction that will open the context menu, contextMenuPosition is contain the position that the context menu happend, and isShowContextMenu is flag that point if the context menu open or close

simply use:

```
const { contextMenuHandler, contextMenuPosition, isShowContextMenu } = useContextMenu();

 <div onContextMenu={contextMenuHandler}>
      <ContextMenu
        position={contextMenuPosition}
        isShowContextMenu={isShowContextMenu}
      >
        <div className="menu-item">first</div>
        <div className="menu-item">second</div>
        <div className="menu-item">third</div>
        <div className="menu-item">fourth</div>
      </ContextMenu>
</div >
```
