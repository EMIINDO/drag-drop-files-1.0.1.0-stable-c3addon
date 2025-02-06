"use strict";

{
    const SDK = globalThis.SDK;
const PLUGIN_CLASS = SDK.Plugins.StraniAnelli_DragAndDropFiles;

    PLUGIN_CLASS.Type = class StraniAnelli_DragAndDropFiles_PluginType extends SDK.ITypeBase
    {
        constructor(sdkPlugin, iObjectType)
        {
            super(sdkPlugin, iObjectType);
        }
    };
}